import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(public router: Router) {

    console.log(router.url);

    this.currentPath = router.url

  }

  currentPath : string = ""

  nagigateToPage(path: string): void {
    this.router.navigateByUrl(path)
  }

}
