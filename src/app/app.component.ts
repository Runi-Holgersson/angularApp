import {Component, DoCheck} from '@angular/core';
import {Router} from "@angular/router";
import {LoadingService} from "./loading-overlay/loading.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements DoCheck{
  public currentUrl: string = '';
  constructor(private router: Router, public loadingService: LoadingService) {
  }
  ngDoCheck(){
    this.currentUrl = this.router.url;
  }
}

