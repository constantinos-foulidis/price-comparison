import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private _snackBar: MatSnackBar) { }
/**
 * Open SnackBar
 * @params message -> snackTittle
 * @params verticalPosition -> top | bottom
 * @params horizontalPosition -> start | center | end | left | right
 * @params type -> success-snackbar | error-snackbar
 */
  openSnackBar(message: string, verticalPosition: MatSnackBarVerticalPosition,
               horizontalPosition: MatSnackBarHorizontalPosition, type: string) {
    this._snackBar.open(message, '', {
      horizontalPosition: horizontalPosition ,
      verticalPosition: verticalPosition,
      panelClass: [type],
      duration: 1000
    });
  }
}
