import {Component, DoCheck} from '@angular/core';
import {LoginPageService} from "./login-page/login-page.service";
import {CourseRedactorService} from "./course-redactor/course-redactor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements DoCheck{
  constructor(private router: Router) {
  }
  ngDoCheck(){
    console.log(this.router.url, 'from app');
  }
}

