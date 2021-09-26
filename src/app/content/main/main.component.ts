import {Component, Output, OnInit, DoCheck} from '@angular/core';
import {CourseContent} from "../../common/interfaces/interfaces";
import {DatePipe} from "@angular/common";
import {SearchFilterPipe} from "../../common/pipes/search-filter.pipe";
import {OrderByPipe} from "../../common/pipes/order-by.pipe";
import {ItemListService} from "../../common/services/item-list.service";
import {MainListService} from "./main-list.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [DatePipe, SearchFilterPipe, OrderByPipe, MainListService]
})
export class MainComponent implements OnInit, DoCheck {
  @Output() public courseItem: CourseContent[] = [];
  public courseData: CourseContent[] = [];

  constructor(public itemListService: ItemListService, private datePipe: DatePipe,
              private searchFilterPipe: SearchFilterPipe, private orderByPipe: OrderByPipe,
              public mainListService: MainListService) {
    this.courseData = itemListService.getDataList();
    this.courseData.forEach(item => {
      item.id = this.mainListService.getUniqueId();
    });
  }

  formatData(coursesArray: CourseContent[], format: string): CourseContent[] {
    coursesArray = this.courseData.map(item => {
      item.date = this.datePipe.transform(item.date, format);
      return item;
    })
    return coursesArray;
  }

  onSearch(event: string) {
    if (event === "") {
      this.courseItem = this.orderByPipe.transform(this.formatData(this.courseData, 'dd.MM.yy'));
    }
    this.courseItem = this.searchFilterPipe.transform(this.courseData, event);
  }

  ngOnInit(): void {
    this.courseItem = this.orderByPipe.transform(this.formatData(this.courseData, 'dd.MM.yy'));
  }

  ngDoCheck() {
    this.courseItem = this.orderByPipe.transform(this.formatData(this.courseData, 'dd.MM.yy'));
  }
}
