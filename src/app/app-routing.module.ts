import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { FormsComponent } from './forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    title: "hello"
  },
  {
    path: "landing",
    component: LandingComponent,
    // redirectTo: ''
    canActivate: [AuthGuard]
  },
  {
    path: "forms",
    component: FormsComponent,

  },
  {
    path: 'profile',
    component: ProfilesComponent,
    canActivateChild: [AuthGuard],
    canDeactivate: [AuthGuard],
    children:
      [
        {
          path: 'user/:id',
          component: ProfileCardComponent
        }
      ]
  },
  {
    path: '**',
    // redirectTo: ''
    component: NotFoundComponent // Assuming you have a NotFoundComponent for handling 404 errors
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
