import { Component, EventEmitter, Output, inject } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  @Output() loggedIn: EventEmitter<string> = new EventEmitter<string>;

  constructor(private sharedSrvc: SharedService) { }

  setUserType(userType: string): void {

    this.loggedIn.emit(userType)
    console.log(userType);

    // localStorage.getItem("loggedInUser") ? '' :
    localStorage.setItem("loggedInUser", userType)
    this.sharedSrvc.isLoggedin = true
    this.sharedSrvc.publishLogin()

    // throw new Error('Method not implemented.');
  }

}
