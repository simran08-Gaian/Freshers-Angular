import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  constructor(public sharedSrvc: SharedService) { }

}
