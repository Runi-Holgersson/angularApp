import {Component, Input, OnChanges} from '@angular/core';
import {ItemListService} from "../../common/services/item-list.service";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnChanges {
  public emptyPage: boolean = false;
  @Input() public courseItemsCount: number = 0;

  constructor(public itemListService: ItemListService) {
  }

  ngOnChanges() {
    if (this.courseItemsCount === 0) {
      this.courseItemsCount = this.itemListService.getAmountOfCourses();
    }
  }
}
