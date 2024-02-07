import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }


  count: number = 0


  isApiCalled: boolean = false


  userDataFromApi: BehaviorSubject<any> = new BehaviorSubject('')


  increment(): void {
    this.count++
  }
  decrement(): void {
    this.count--
  }
}
