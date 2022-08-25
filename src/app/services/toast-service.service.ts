import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastServiceService {
  test(p: any) {
    console.log(p);
  }

  constructor() { }
}
