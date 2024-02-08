import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router) {

    console.log("shared service initilized");

  }


  globalVarible: string = "some random value"

  globalBoolean : boolean = false

  count: number = 0


  isApiCalled: boolean = false


  isLoggedin: boolean = false


  logout(): void {
    this.isLoggedin = false
    localStorage.clear()
    this.router.navigate(['/'])
  }


  userDataFromApi: BehaviorSubject<any> = new BehaviorSubject('')


  increment(): void {
    this.count++
  }
  decrement(): void {
    this.count--
  }

  loginSubject: Subject<any> = new Subject()



  // to tell the other compos or srvs that something has changed
  publishLogin() {
    this.loginSubject.next('');
  }

  // to listen to that specfic change 
  subscribeLogin() {
    return this.loginSubject.asObservable();
  }
}
