import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.sass']
})
export class CoursesComponent implements OnInit {

  //public courseItem: string[];

  constructor() {

  }

  ngOnInit(): void {
   /* this.courseItem = [
      `course 1`, `course 2`, `course 3`
    ]*/
  }

}
