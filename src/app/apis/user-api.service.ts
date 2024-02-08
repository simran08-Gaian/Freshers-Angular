import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {

  constructor(private http: HttpClient) { }


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
