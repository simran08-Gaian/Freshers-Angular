import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {


  constructor(public router: Router, public activatedRoute: ActivatedRoute) {

  }

  name: string = "dasdsa"


  myCustomStyle: string = "padding:10rem"

  ngOnInit(): void {
    console.log(this.activatedRoute);

  }


  valid : boolean = false

  checkValid(): boolean {
    this.valid = this.name.length >= 8
    return this.valid
  }

}
