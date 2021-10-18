import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {CourseRedactorComponent} from "./course-redactor/course-redactor.component";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {AuthorizationGuard} from "./authorization.guard";
import {MainComponent} from "./main/main.component";

const coursesRoutes: Routes = [
  {path: 'courses', component: MainComponent, canActivate: [AuthorizationGuard], data: {breadcrumb: 'Courses'}},
  {path: 'login-page', component: LoginPageComponent},
  {path: 'courses/:id', component: CourseRedactorComponent, canActivate: [AuthorizationGuard], data: {breadcrumb: ''}},
  {
    path: 'courses/new',
    component: CourseRedactorComponent,
    canActivate: [AuthorizationGuard],
    data: {breadcrumb: 'New'}
  },
]

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: 'home', component: HomePageComponent, data: {breadcrumb: 'Home'}},
  {path: 'home',  data: {breadcrumb: 'Home'}, children: [
      {path: '', component: HomePageComponent},
      {path: 'courses', component: MainComponent, canActivate: [AuthorizationGuard], data: {breadcrumb: 'Courses'}},
      {path: 'login-page', component: LoginPageComponent},
      {path: 'courses/:id', component: CourseRedactorComponent, canActivate: [AuthorizationGuard], data: {breadcrumb: ''}},
      {
        path: 'courses/new',
        component: CourseRedactorComponent,
        canActivate: [AuthorizationGuard],
        data: {breadcrumb: 'New'}
      },
    ]},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
