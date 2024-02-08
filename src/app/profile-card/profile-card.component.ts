import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent {

  id: string = '';

  subscriptions: Subscription[] = []

  constructor(private route: ActivatedRoute, private router: Router) { }
 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') as string;

    // Subscribe to router events to remount the component on route change
   let routerSub =  this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      console.log("got the data");

      this.id = this.route.snapshot.paramMap.get('id') as string;
    });

    this.subscriptions.push(routerSub)
  }


  ngOnDestroy(): void {
   this.subscriptions.forEach((sub)=>{
    sub.unsubscribe()
   })
  }
}
