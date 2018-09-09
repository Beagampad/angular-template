import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const TOKEN = 'TOKEN';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

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
  /** GET todas las usuarias */
  getUsers(): Observable<any> {
    const url = `${this.rutasUrl}/notalone`;
    return this.http.get<any>(url)// espera una interfaz de usuarias, si no es así poner any
    .pipe(
      map(data => data),

       catchError(this.handleError('getUsers', []))
    );
  }

  /** GET User by id */
  getUser(id: number): Observable<any> {
  const url = `${this.rutasUrl}/CRUD/detalles?id=${id}`;
  return this.http.get<any>(url).pipe(
    catchError(this.handleError<IUser>(`getUser id=${id}`))
    );
  }
  /** POST: update the user on the server */
  updateUser (id: number, email: string, intereses: string): Observable<any> {
    const url = `${this.rutasUrl}/notalone/update`;
    console.log(intereses);
  return this.http.post<any>(url, {id: id, email: email, intereses: intereses}, httpOptions).pipe(
    catchError(this.handleError<any>(`updateUser`))
  );
}
  /** LOGIN */
  login(email: string, password: string): Observable<any> {
    const url = `${this.rutasUrl}/notalone/login`; // ruta de mi back para el login
    console.log(url);
    return this.http.post<any>(url, {email: email, password: password}, httpOptions)
    .pipe(
      catchError(this.handleError('login', 'error')));
  }

  setToken(token: string): void {
    localStorage.setItem(TOKEN, token);
  }

  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }

  logout() {
    localStorage.removeItem(TOKEN);
}
  // Envío de Invitaciones
  sendInvitation(idusuaria: number, email: string, comentarios: string, invitaciones: number) {
    const url = `${this.rutasUrl}/notalone/invitacion`; // ruta de mi back
    console.log(invitaciones);
    return this.http.post<any>(url, {idusuaria: idusuaria, email: email, comentarios: comentarios, invitaciones: invitaciones}, httpOptions)
    .pipe(
      catchError(this.handleError('sendInvitation', 'error')));
  }
  // Consulta de nº de invitaciones que quedan por enviar
  numInvitation(idusuaria: number) {
    const url = `${this.rutasUrl}/notalone/numinvitacion?id=${idusuaria}`; // ruta de mi back
    return this.http.get<any>(url)
    .pipe(
      catchError(this.handleError('numInvitation', 'error')));
  }

  // REGISTRO DE USUARIA
  registerUser(nombre: string,apellidos:string, fechanacimiento: string, tfn: string, intereses: string, foto: string, email: string, password1:string): Observable<any> {
    
    
    const url = `${this.rutasUrl}/notalone/register`; // ruta de mi back
    console.log(url);
    console.log(nombre);
    return this.http.post<any>(url,{nombre:nombre, apellidos: apellidos, fechanacimiento: fechanacimiento,tfn: tfn, intereses:intereses, foto: foto, email: email, password1: password1},httpOptions)
    .pipe(
      map(data => data),
      catchError(this.handleError('registerUser', 'error')));
  }

  checkToken(token: number): Observable<any>{

    console.log(token);

    const url = `${this.rutasUrl}/notalone/checktoken?tk=${token}`; // ruta de mi back

    console.log(url);

    return this.http.get<any>(url)
    .pipe(
      map(data => data),
      catchError(this.handleError('checkToken', 'error')));
  }
}

interface IUser {
  id: number;
  nombre: string;
  apellidos: string;
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



