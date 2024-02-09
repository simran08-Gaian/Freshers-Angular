import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { UserApiService } from '../apis/user-api.service';
import { SharedService } from '../shared.service';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(public router: Router,
    private userApi: UserApiService,
    public sharedSrvc: SharedService
  ) {

    // console.log(router);

    this.currentPath = router.url

  }


  isLoggedin : boolean = localStorage.getItem("loggedInUser") ? true : false && this.sharedSrvc.isLoggedin

  mySubs: Subscription[] = []


  isApiCalled: boolean = false

  ngOnInit(): void {

    this.sharedSrvc.userDataFromApi.subscribe((res) => {
      console.log("got the res in nav", res);

    })


    this.isApiCalled = this.sharedSrvc.isApiCalled


    console.log(this.router.events.pipe().subscribe((e) => { e }));


    let sub = this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
      ).subscribe(() => {
        this.currentPath = this.router.url
      })
      
      
      
      let loginSub =  this.sharedSrvc.subscribeLogin().subscribe(()=>{
        console.log("some login event happend");
        
        this.isLoggedin = true
      })


      
      this.mySubs.push(sub)
      this.mySubs.push(loginSub)
  }

  currentPath: string = ""

  nagigateToPage(path: string): void {
    this.router.navigateByUrl(path)
    // this.router.navigate([path], { queryParams: { amount : Math.floor(Math.random() * 200)} })
    console.log(this.router);
  }



  logout(){
    this.sharedSrvc.logout()
    this.isLoggedin = this.sharedSrvc.isLoggedin
  }

  ngOnDestroy(): void {
    this.mySubs.forEach((sub) => {
      sub.unsubscribe()
    })
  }

}
