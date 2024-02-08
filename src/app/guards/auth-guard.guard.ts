// import { Injectable } from '@angular/core';
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { ProfilesComponent } from '../profiles/profiles.component';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<ProfilesComponent>{

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return localStorage.getItem("loggedInUser") === 'admin' || localStorage.getItem("loggedInUser") === 'user'
//   }

//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return localStorage.getItem("loggedInUser") === 'admin';
//   }


//   canDeactivate(component: ProfilesComponent): boolean {
//     console.log("in this auth");

//     // if (component.hasUnsavedChanges()) {
//     //   return window.confirm('You have unsaved changes. Do you really want to leave?');
//     // }
//     return true;
//   }




// }


import { CanActivateFn, CanActivateChildFn, CanDeactivateFn } from "@angular/router";
import { SharedService } from '../shared.service';
import { ProfilesComponent } from '../profiles/profiles.component';

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // const sharedSrvc = inject(SharedService)
  return localStorage.getItem("loggedInUser") === 'admin' || localStorage.getItem("loggedInUser") === 'user'

}
export const AuthGuardChild: CanActivateChildFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // const sharedSrvc = inject(SharedService)
  return localStorage.getItem("loggedInUser") === 'admin'

}
export const AuthGuardDeactivate: CanDeactivateFn<ProfilesComponent> = (component: ProfilesComponent) => {
  // const sharedSrvc = inject(SharedService)
  if (component.hasUnsavedChanges()) {
    return window.confirm('You have unsaved changes. Do you really want to leave?');
  }
  return true;
}

