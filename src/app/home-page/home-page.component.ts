import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ItemListService} from "../common/services/item-list.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit, DoCheck {

  constructor(private router: Router, public itemListService: ItemListService) { }

  ngOnInit(): void {
    this.itemListService.currentUrl = this.router.url;
  }
  ngDoCheck(){
    this.itemListService.currentUrl = this.router.url;
  }

}
