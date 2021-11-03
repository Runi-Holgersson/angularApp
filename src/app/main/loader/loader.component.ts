import {Component, Input, OnChanges} from '@angular/core';
import {ItemListService} from "../../common/services/item-list.service";
import {ITEMS_IN_PAGE} from "../../common/constants/constants";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnChanges {

  @Input() public courseItemsCount: number = 0;

  constructor(public itemListService: ItemListService) {
  }

  ngOnChanges() {
    if (this.courseItemsCount === 0) {
      this.itemListService.currentPage--;
      this.itemListService.getDatabaseList(ITEMS_IN_PAGE * (this.itemListService.currentPage - 1), ITEMS_IN_PAGE);
    }
  }
}
