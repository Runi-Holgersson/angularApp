import {Component, Output, OnInit} from '@angular/core';
import {CourseContent} from "../../common/interfaces/interfaces";
import {DatePipe} from "@angular/common";
import {SearchFilterPipe} from "../../common/pipes/search-filter.pipe";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass'],
  providers: [DatePipe, SearchFilterPipe]
})
export class MainComponent implements OnInit {

  @Output() public courseItem: CourseContent[] = [];
  public courseData: CourseContent[] = [
    {
      title: `Course 1`, duration: 120, date: `07.09.2018`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`
    },
    {
      title: `Course 2`, duration: 130, date: `07.09.2019`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
    },
    {
      title: `Course 3`, duration: 140, date: `07 Jun 2020`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`
    },
    {
      title: `Course 4`, duration: 150, date: `07.09.2021`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
    },
    {
      title: `Course 2`, duration: 160, date: `3, 12, 2018`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false
    },
    {
      title: `Course 2`, duration: 180, date: `07 Aug 2019`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
    },
    {
      title: `Course 2`, duration: 190, date: `07 Oct 2019`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
    },
  ];

  constructor() {
  }

  formatData(coursesArray: CourseContent[], format: string): CourseContent[] {
    coursesArray = this.courseData.map(item => {
      item.date = new DatePipe('en-ru').transform(item.date, format);
      return item;
    })
    return coursesArray;
  }

  sortData(coursesArray: CourseContent[]): CourseContent[] {
    coursesArray.sort((a, b) => {
      const firstDate: number = new Date(a.date).getTime();
      const secondDate: number = new Date(b.date).getTime();
      return (firstDate - secondDate);
    })
    return coursesArray;
  }

  onSearch(event: string) {
    if (event === ""){
      this.courseItem = this.sortData(this.formatData(this.courseData, 'dd.MM.yy'));
    }
    this.courseItem = new SearchFilterPipe().transform(this.courseItem, event);
  }

  ngOnInit(): void {
    this.courseItem = this.sortData(this.formatData(this.courseData, 'dd.MM.yy'));
  }
}
