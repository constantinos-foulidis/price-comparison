import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { SeessionStorageService } from './seession-storage.service';
import { Router } from '@angular/router';
import { SnackbarService } from './snackbar.service';
@Injectable({
  providedIn: 'root'
})
export class AuthuserService {

  constructor(private http: HttpClient, private sStorage: SeessionStorageService, private router:Router,private _snack: SnackbarService) { }


  /**
   * Handle Http request
   * Login
   * @param data - User Data
   */
   login(data: any ): Observable<any>{

    return this.http.post<any>('http://localhost:4040/api/auth/login', data).pipe(
      map( (response) => {
        if (response.token) {
          this._snack.openSnackBar('Succefully Login', 'top', 'right', 'success-snackbar');
          this.sStorage.setItem('status','true');
          this.sStorage.setItem('username', response.username);
          this.sStorage.setItem('email', response.email);
          this.sStorage.setItem('password', response.password);
          this.sStorage.setItem('favorites',response.user.favorites);

          this.sStorage.setItem('watched',response.watched);

          this.router.navigate(['/application/search']);
          return response;
        }
      }
   ), catchError((err) => {
    console.log('error caught in service');
    this._snack.openSnackBar('Something went wrong', 'top', 'right', 'error-snackbar');

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
          this._snack.openSnackBar('Succefully Register', 'top', 'right', 'success-snackbar');

          // this.getUserInfo(response.token);
          return response;
        }
      }
   ), catchError((err) => {
    console.log('error caught in service');
    this._snack.openSnackBar('Something went wrong', 'top', 'right', 'error-snackbar');
    console.error(err);

    // Handle the error here
    return of('error');  // Rethrow it back to component
  }));
    }
  }
