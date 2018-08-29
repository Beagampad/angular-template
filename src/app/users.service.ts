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
  console.log(url);
  return this.http.get<any>(url).pipe(
    catchError(this.handleError<IUser>(`getUser id=${id}`))
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

interface ILoginResultModel {
  token: string;
  error: string;
}

