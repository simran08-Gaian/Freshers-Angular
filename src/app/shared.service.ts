import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  count : number = 0



  increment(): void {
    this.count++
  }
  decrement(): void {
    this.count--
  }
}
