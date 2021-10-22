import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./main/main.component";
import {CourseItemComponent} from "./main/course-item/course-item.component";
import {LoaderComponent} from "./main/loader/loader.component";
import {SearchPanelComponent} from "./main/search-panel/search-panel.component";
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './main/course-item/button/button.component';
import { ChangeBorderDirective } from './common/directives/change-border.directive';
import { DurationPipe } from './common/pipes/duration.pipe';
import { SearchFilterPipe } from './common/pipes/search-filter.pipe';
import { OrderByPipe } from './common/pipes/order-by.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { LoginButtonComponent } from './header/login-button/login-button.component';
import { LogoutButtonComponent } from './header/logout-button/logout-button.component';
import {LoginPageService} from "./login-page/login-page.service";
import {AuthorizationService} from "./common/services/authorization.service";
import { CourseRedactorComponent } from './course-redactor/course-redactor.component';
import {CourseRedactorService} from "./course-redactor/course-redactor.service";
import { HomePageComponent } from './home-page/home-page.component';
import { ErrorPageComponent } from './error-page/error-page.component';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    MainComponent,
    CourseItemComponent,
    LoaderComponent,
    SearchPanelComponent,
    ButtonComponent,
    ChangeBorderDirective,
    DurationPipe,
    SearchFilterPipe,
    OrderByPipe,
    LoginPageComponent,
    LoginButtonComponent,
    LogoutButtonComponent,
    CourseRedactorComponent,
    HomePageComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [LoginPageService, AuthorizationService, CourseRedactorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
