import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeessionStorageService {

  constructor() { }
   getItem(key: string): string | null {
    return window.sessionStorage.getItem(key);
  }
   setItem(key: string,status: string): void {
    window.sessionStorage.setItem(key,status);
  }
   removeItem(key: string): void {
    window.sessionStorage.removeItem(key);
  }
}
