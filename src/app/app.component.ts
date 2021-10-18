import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";


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

