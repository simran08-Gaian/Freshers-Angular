import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../apis/user-api.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public router: Router,
    private userApi: UserApiService,
    private sharedSrvc: SharedService
  ) {

    // console.log(router);

    this.currentPath = router.url

  }


  isApiCalled: boolean = false

  ngOnInit(): void {

    this.sharedSrvc.userDataFromApi.subscribe((res) => {
      console.log("got the res in nav", res);

    })


    this.isApiCalled = this.sharedSrvc.isApiCalled

  }

  currentPath: string = ""

  nagigateToPage(path: string): void {
    this.router.navigateByUrl(path)
    // this.router.navigate([path], { queryParams: { amount : Math.floor(Math.random() * 200)} })
    console.log(this.router);
  }

}
