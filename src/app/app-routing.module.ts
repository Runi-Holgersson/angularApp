import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContentComponent} from "./content/content.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CourseRedactorComponent} from "./course-redactor/course-redactor.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthorizationGuard} from "./authorization.guard";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: HomePageComponent},
  {path: 'courses', component: ContentComponent, canActivate: [AuthorizationGuard]},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'courses/:id', component: CourseRedactorComponent, canActivate: [AuthorizationGuard]},
  {path: 'courses/new', component: CourseRedactorComponent, canActivate: [AuthorizationGuard]},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
