import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) {
    this.myBehaviouralSubject.next('hello')
   }


  mySubject : Subject<any> = new Subject() 
  myBehaviouralSubject : BehaviorSubject<string> = new BehaviorSubject('data from myBehaviouralSubject') 

  getUsers(): Observable<any> {
    return  this.http.get("https://randomuser.me/api/")

    // response.subscribe((res) => {
    //   console.log(res);
    //   return res
    // },
    //   (err) => {
    //     console.log(err);
    //     return err
    //   }
    // )
  }
}
