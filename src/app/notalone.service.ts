import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotaloneService {

  constructor(private http: HttpClient,
              private rutasUrl = 'http://localhost:3000/notalone')  { }// URL to web API de mi backend

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

  getRutas() :Observable<IUsuaria[]> {
    //return of(RUTAS);
    return this.http.get<any>(this.rutasUrl)//espera una interfaz de rutas, si no es así poner any
    .pipe(
      catchError(this.handleError('getRutas', []))
    );
  }

  /** GET Ruta by id */
getRuta(id: number): Observable<IRuta> {
  const url = `${this.rutasUrl}/${id}`;
  return this.http.get<IRuta>(url).pipe(
    catchError(this.handleError<IRuta>(`getHero id=${id}`))
    );
  }
}

interface IRuta{
  id : number;
  usuaria : string;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
}

interface IUsuaria{
  id : number;
  nombre : string;
  apellidos : string;
  fechanacimiento: string;
  intereses: string;
  foto ?: string;
  email: string;
  password1?: string;
  repetirpass?: string;
  nombreusuaria?: string;
  idinvitador?: string;
  numinvitaciones?: string;
}

const RUTAS: IRuta[] = [{

  id:1,
  usuaria:"Usuaria1",
  hora:"02:00h",
  origen:"Centro",
  destino:"el Palo",
  medio:"taxi"
 }, {
   id:2,
   usuaria:"Usuaria2",
   hora:"00:00h",
   origen:"Centro",
   destino:"el Limonar",
   medio:"bus"
 }, {
   id:3,
   usuaria:"Usuaria3",
   hora:"04:00h",
   origen:"Centro",
   destino:"Teatinos",
   medio:"taxi"
 }

]

