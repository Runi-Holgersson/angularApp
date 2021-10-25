import {Component, DoCheck, OnInit} from '@angular/core';
import {Page} from "../../../common/interfaces/interfaces";
import {ItemListService} from "../../../common/services/item-list.service";

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.sass']
})
export class PagingComponent {
  public pages: number[] = [1, 2, 3, 4];

  constructor(public itemListService: ItemListService) {
  }

}
