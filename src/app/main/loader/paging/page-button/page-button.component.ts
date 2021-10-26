import {Component, OnInit, Input, Output} from '@angular/core';
import {ItemListService} from "../../../../common/services/item-list.service";
import {ITEMS_IN_PAGE} from "../../../../common/constants/constants";

@Component({
  selector: 'app-page-button',
  templateUrl: './page-button.component.html',
  styleUrls: ['./page-button.component.sass']
})
export class PageButtonComponent {
  @Input() public buttonNumber: number = 0;

  constructor(public itemListService: ItemListService) {
  }

  emitActivePage(pageNumber: number) {
    this.itemListService.currentPage = pageNumber;
    this.itemListService.getDatabaseList(ITEMS_IN_PAGE * (pageNumber - 1), ITEMS_IN_PAGE);
  }
}
