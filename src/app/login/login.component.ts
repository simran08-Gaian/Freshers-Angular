import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  setUserType(userType: string): void {
    console.log(userType);

    // localStorage.getItem("loggedInUser") ? '' :
      localStorage.setItem("loggedInUser", userType)

    // throw new Error('Method not implemented.');
  }

}
