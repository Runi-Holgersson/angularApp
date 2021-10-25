import {Component, Output, OnInit, DoCheck} from '@angular/core';
import {CourseContent} from "../common/interfaces/interfaces";
import {SearchFilterPipe} from "../common/pipes/search-filter.pipe";
import {OrderByPipe} from "../common/pipes/order-by.pipe";
import {ItemListService} from "../common/services/item-list.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

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
    // this.courseData = itemListService.dataList;
    /*this.courseData.forEach(item => {
      item.id = this.itemListService.getUniqueId();
    });*/
  }

  onSearch(event: string) {
    this.searchData = event;
  }

  getDataList(): CourseContent[] {
    this.http.get<CourseContent[]>('http://localhost:3004/courses')
      .subscribe((data) => {
        this.itemListService.dataList = data;
      });
    return this.itemListService.dataList;
  }

  ngOnInit(): void {
    this.courseItem = this.orderByPipe.transform(this.getDataList());
  }

  ngDoCheck() {
    if (this.searchData === "") {
      this.courseItem = this.orderByPipe.transform(this.itemListService.dataList);
    }
    this.courseItem = this.orderByPipe.transform(this.searchFilterPipe.transform(this.itemListService.dataList, this.searchData));
  }
}
