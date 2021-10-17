import {Component, DoCheck} from '@angular/core';
import {LoginPageService} from "./login-page/login-page.service";
import {CourseRedactorService} from "./course-redactor/course-redactor.service";
import {Router} from "@angular/router";
import {ItemListService} from "./common/services/item-list.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements DoCheck{
  public currentUrl: string = '';
  constructor(private router: Router) {
  }
  ngDoCheck(){
    this.currentUrl = this.router.url;
  }
}

