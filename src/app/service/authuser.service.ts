import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  constructor(private http: HttpClient) { }


  /**
   * Handle Http request
   * Login
   * @param data - User Data
   */
   login(data: any ): Observable<any>{

    return this.http.post<any>('http://localhost:4040/api/auth/login', data).pipe(
      map( (response) => {
        console.log(response);
        if (response.token) {

          // this.getUserInfo(response.token);
          return response;
        }
      }
   ), catchError((err) => {
    console.log('error caught in service');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
    }
      /**
   * Handle Http request
   * Login
   * @param data - User Data
   */
   register(data: any ): Observable<any>{

    return this.http.post<any>('http://localhost:4040/api/users', data).pipe(
      map( (response) => {
        console.log(response);
        if (response.token) {

          // this.getUserInfo(response.token);
          return response;
        }
      }
   ), catchError((err) => {
    console.log('error caught in service');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
    }
  }
