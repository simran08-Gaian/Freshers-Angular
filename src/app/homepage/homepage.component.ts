import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  constructor(public sharedSrvc : SharedService) {

    console.log(this.sharedSrvc);
    
  }

  arr : [] = []

  increment(): void {
    this.count++
  }
  decrement(): void {
    this.count--
  }

  count: number = 0



}
