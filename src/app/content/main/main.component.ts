import {Component, OnInit} from '@angular/core';
import {CourseContent} from "../../../common/interfaces/interfaces";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public courseItem: CourseContent[]=[];

  constructor() {

  }

  ngOnInit(): void {
    this.courseItem = [
      {title: `Course 1`, duration: `1h30min`, date: `07.09.2018`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`},
      {title: `Course 2`, duration: `1h35min`, date: `07.09.2019`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`},
      {title: `Course 3`, duration: `1h40min`, date: `07.09.2020`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`},
      {title: `Course 4`, duration: `1h45min`, date: `07.09.2021`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`}
    ]
  }

}
