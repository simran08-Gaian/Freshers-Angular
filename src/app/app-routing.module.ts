import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { FormsComponent } from './forms/forms.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { AuthGuard, AuthGuardChild, AuthGuardDeactivate } from './guards/auth-guard.guard';
import { LearningPipeComponent } from './pipe/learning-pipe/learning-pipe.component';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

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
    children: [
      {
        path: 'reactiveForm',
        component: ReactiveFormComponent,
        title: "Reactive Forms"
      }
    ]

  },
  {
    path: 'profile',
    component: ProfilesComponent,
    canActivateChild: [AuthGuardChild],
    canDeactivate: [AuthGuardDeactivate],
    children:
      [
        {
          path: 'user/:id',
          component: ProfileCardComponent
        }
      ]
  },
  {
    path: 'pipe',
    component: LearningPipeComponent,
    title: 'Learning Pipe'
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
