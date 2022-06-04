import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor( private http: HttpClient) { }

  getMovies(): Observable<any>{

    return this.http.get<any>('http://localhost:4040/api/product').pipe(
      map( (response) => {
        console.log(response);

          // this.getUserInfo(response.token);
          return response.data;

      }
   ), catchError((err) => {
    console.log('error caught in service');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
    }
}
