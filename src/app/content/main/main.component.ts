import {Component, Output, OnInit, DoCheck} from '@angular/core';
import {CourseContent} from "../../common/interfaces/interfaces";
import {DatePipe} from "@angular/common";
import {SearchFilterPipe} from "../../common/pipes/search-filter.pipe";
import {OrderByPipe} from "../../common/pipes/order-by.pipe";
import {ItemListService} from "../../common/services/item-list.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [DatePipe, SearchFilterPipe, OrderByPipe, ItemListService]
})
export class MainComponent implements OnInit, DoCheck{
  @Output() public courseItem: CourseContent[] = [];
  public courseData: CourseContent[] = [];

  constructor(private itemListService: ItemListService, private datePipe: DatePipe) {
    this.courseData = itemListService.getDataList();
    this.courseData.forEach(item => {
      item.id = Math.floor(Math.random()*1000);
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
      this.courseItem = new OrderByPipe().transform(this.formatData(this.courseData, 'dd.MM.yy'));
    }
    this.courseItem = new SearchFilterPipe().transform(this.courseItem, event);
  }

  ngOnInit(): void {
    this.courseItem = new OrderByPipe().transform(this.formatData(this.courseData, 'dd.MM.yy'));
  }
  ngDoCheck() {
    this.courseItem = new OrderByPipe().transform(this.formatData(this.courseData, 'dd.MM.yy'));
  }
}
