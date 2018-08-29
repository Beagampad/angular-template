import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotaloneService {

  rutasUrl = 'http://localhost:3000'; // URL to web API de mi backend


  constructor(private http: HttpClient)  { }
  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getRutas(): Observable<any> {
    // return of(RUTAS);
    const url = `${this.rutasUrl}/notalone/rutas`;
    return this.http.get<any>(url)// espera una interfaz de rutas, si no es así poner any
    .pipe(
      map(data => data),

       catchError(this.handleError('getRutas', []))
    );
  }

  /** GET Ruta by id */
getRuta(id: number): Observable<any> {
  const url = `${this.rutasUrl}/notalone/rutadetalle?id=${id}`;
  return this.http.get<any>(url).pipe(
    catchError(this.handleError<IRuta>(`getHero id=${id}`))
    );
  }
}

interface IRuta{
  id: number;
  usuaria: string;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
  coordenadas: string;
  comentarios: string;
}
