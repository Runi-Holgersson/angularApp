import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {ItemListService} from "../../../common/services/item-list.service";

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.sass']
})
export class PagingComponent implements DoCheck{
  public pages: number[] = [];

  constructor(public itemListService: ItemListService) {
    this.pages = this.itemListService.getAmountOfPages();
  }

  ngDoCheck() {
    this.pages = this.itemListService.pagesArray;
  }
}
