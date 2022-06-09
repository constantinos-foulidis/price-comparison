import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor( private http: HttpClient,private _snack: SnackbarService) { }

  getMovies(): Observable<any>{

    return this.http.get<any>('http://localhost:4040/api/product').pipe(
      map( (response) => {
        console.log(response);
        // this._snack.openSnackBar('Succefully', 'top', 'right', 'success-snackbar');

          // this.getUserInfo(response.token);
          return response.data;

      }
   ), catchError((err) => {
    console.log('error caught in service');
    console.error(err);
    this._snack.openSnackBar('Something went wrong', 'top', 'right', 'error-snackbar');

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
    }

  updateMovies(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:4040/api/users/update',data).pipe(
      map( (response) => {
        this._snack.openSnackBar('Succefully Movie Updated', 'top', 'right', 'success-snackbar');

        console.log(response);
           response.complete = true;
          // this.getUserInfo(response.token);
          return response;

      }
   ), catchError((err) => {
    this._snack.openSnackBar('Something went wrong', 'top', 'right', 'error-snackbar');

    console.log('error caught in service');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
  }
  updateProducts(data: any): Observable<any>{
    return this.http.post<any>('http://localhost:4040/api/product/update',data).pipe(
      map( (response) => {
        this._snack.openSnackBar('Succefully Movie Updated', 'top', 'right', 'success-snackbar');

        console.log(response);
           response.complete = true;
          // this.getUserInfo(response.token);
          return response;

      }
   ), catchError((err) => {
    this._snack.openSnackBar('Something went wrong', 'top', 'right', 'error-snackbar');

    console.log('error caught in service');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
  }
}
