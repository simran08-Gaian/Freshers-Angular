import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'freshers';

  constructor(public sharedServc: SharedService) {

  }


  user: string = ''

  handleOutputByLogin(userType: string): void {
    console.log("got this from login");
    this.user = userType

  }
}
