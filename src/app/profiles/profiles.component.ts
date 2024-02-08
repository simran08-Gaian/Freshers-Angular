import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserApiService } from '../apis/user-api.service';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent {


  hasUnsavedChanges() {
    return true
  }


  userData: any = null


  subs: Subscription[] = []

  constructor(
    public router: Router,
    public userApi: UserApiService,
    public sharedSrvc: SharedService) { }

  goto(id: number): void {
    // console.log(`/user/${id}`);
    this.router.navigateByUrl(`profile/user/${id}`);
  }

  getUserData() {
    // const data = this.userApi.getUsers()
    // console.log(data);

    // const userApiSub = this.userApi.getUsers().subscribe((res) => {
    //   this.userData = res
    //   this.sharedSrvc.userDataFromApi.next(res)
    //   this.sharedSrvc.isApiCalled = true
    //   console.log(this.userData);
    // },
    //   (err) => {
    //     console.log(err);

    //   })

    //  let newSubApi =  this.userApi.getUsers().subscribe({
    //     next(value) {

    //       console.log(`new way ${value}`);

    //     }, error(err) {
    //       console.log(err);

    //     },
    //   })

    let newSubApi = this.userApi.getUsers().subscribe({
      next: (value) => {
        console.log(value.results[0].picture.large);
        this.userData = value.results[0]
      },
      error: (err) => {
        console.log(err);

      },
      complete: () => {
        console.log("done");
        
      }
    })




    this.subs.push(newSubApi)
  }

}
