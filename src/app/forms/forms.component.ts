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

  ngOnInit(): void {
    console.log(this.activatedRoute);

  }

}
