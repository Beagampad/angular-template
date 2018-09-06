import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

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
  // Get all rutas
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
    catchError(this.handleError<IRuta>(`getRuta id=${id}`))
    );
  }
// Crear Ruta
createRuta(id: string, origen: string, destino: string, fecha: string, hora: string, medio: string, comentarios: string): Observable<any> {
  const url = `${this.rutasUrl}/notalone/createruta`; // ruta de mi back para el createruta
  return this.http.post<any>( url, {id: id, origen: origen, destino: destino, fecha:fecha, medio: medio, hora: hora, comentarios: comentarios}, httpOptions)
  .pipe(
    map(data => console.log(data)),
    catchError(this.handleError('createRuta', 'error')));
  }

getCoordOrig(id: string, ciudad: string){
  const url = `${this.rutasUrl}/notalone/coord`; // ruta de mi back
  return this.http.post<any>(url, {id: id, ciudad: ciudad}, httpOptions)
    .pipe(
      map(data => data),
      catchError(this.handleError('getCoord', 'error')));
}

getCoordDest(id: string, ciudad: string){
  const url = `${this.rutasUrl}/notalone/coord2`; // ruta de mi back
  return this.http.post<any>(url, {id: id, ciudad: ciudad}, httpOptions)
    .pipe(
      map(data => data),
      catchError(this.handleError('getCoord', 'error')));
}

/*leavecomment(id: string, comment: string){
  const url = `${this.rutasUrl}/notalone/coord2`; // ruta de mi back
  return this.http.post<any>(url, {id: id, comment: comment}, httpOptions)
    .pipe(
      map(data => data),
      catchError(this.handleError('leavecomment', 'error')));
}*/

joinme(nombre, tfn, email, emaillog) {
  const url = `${this.rutasUrl}/notalone/joinme`; // ruta de mi back
  console.log(url);
  return this.http.post<any>(url, {nombre: nombre, tfn: tfn, email: email, emaillog: emaillog}, httpOptions)
    .pipe(
      map(data => data),
      catchError(this.handleError('joinme', 'error')));
}

}
interface IRuta {
  id: number;
  usuaria: string;
  hora ?: string;
  origen: string;
  destino: string;
  medio: string;
  coordenadas: string;
  comentarios: string;
}
