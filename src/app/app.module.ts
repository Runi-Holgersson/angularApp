import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";


import {AppComponent} from './app.component';
import {ContentComponent} from "./content/content.component";
import {BreadcrumpsComponent} from "./breadcrumps/breadcrumps.component";
import {HeaderComponent} from "./header/header.component";
import {MainComponent} from "./content/main/main.component";
import {CourseItemComponent} from "./content/main/course-item/course-item.component";
import {LoaderComponent} from "./content/main/loader/loader.component";
import {SearchPanelComponent} from "./content/main/search-panel/search-panel.component";
import {FooterComponent} from './footer/footer.component';
import {ButtonComponent} from './content/main/course-item/button/button.component';
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
    ContentComponent,
    BreadcrumpsComponent,
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
    RouterModule
  ],
  providers: [LoginPageService, AuthorizationService, CourseRedactorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
