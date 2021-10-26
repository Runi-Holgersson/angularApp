import {Component, Output, Input, OnInit, DoCheck, OnChanges, AfterContentChecked, AfterViewInit} from '@angular/core';
import {CourseContent} from "../common/interfaces/interfaces";
import {SearchFilterPipe} from "../common/pipes/search-filter.pipe";
import {OrderByPipe} from "../common/pipes/order-by.pipe";
import {ItemListService} from "../common/services/item-list.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ITEMS_IN_PAGE} from "../common/constants/constants";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [SearchFilterPipe, OrderByPipe]
})
export class MainComponent implements OnInit, DoCheck {
  @Output() public courseItem: CourseContent[] = [];
  // public courseData: CourseContent[] = [];
  public searchData: string = "";

  constructor(public itemListService: ItemListService, private searchFilterPipe: SearchFilterPipe,
              private orderByPipe: OrderByPipe, private router: Router, private http: HttpClient) {
  }

  onSearch(event: string) {
    this.searchData = event;
  }

  ngOnInit(): void {
    this.courseItem = this.orderByPipe.transform(this.itemListService.getDatabaseList(0, ITEMS_IN_PAGE));
  }

  ngDoCheck() {
    if (this.searchData !== "") {
      this.courseItem = this.orderByPipe.transform(this.itemListService.searchCourse(this.searchData));
      this.searchData = "";
    } else {
      this.courseItem = this.orderByPipe.transform(this.itemListService.dataList);
    }
  }
}
