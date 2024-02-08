import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsComponent } from './forms/forms.component';
import { MyTODOComponent } from './TODO/my-todo/my-todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoCardComponent } from './todo-card/todo-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ProfileCardComponent } from './profile-card/profile-card.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { LearningPipeComponent } from './pipe/learning-pipe/learning-pipe.component';
import { CustomPipe } from './pipe/custom.pipe';
import { ReactiveFormComponent } from './forms/reactive-form/reactive-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LandingComponent,
    NavbarComponent,
    FormsComponent,
    MyTODOComponent,
    TodoCardComponent,
    NotFoundComponent,
    ProfilesComponent,
    ProfileCardComponent,
    LoginComponent,
    LearningPipeComponent,
    CustomPipe,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
