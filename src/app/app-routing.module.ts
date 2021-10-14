import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContentComponent} from "./content/content.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CourseRedactorComponent} from "./course-redactor/course-redactor.component";

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'courses', component: ContentComponent},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'courses/:id', component: CourseRedactorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
