import {Component, Output, OnInit} from '@angular/core';
import {CourseContent} from "../../common/interfaces/interfaces";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  @Output() public courseItem: CourseContent[]=[];

  constructor() {

  }

  ngOnInit(): void {
    this.courseItem = [
      {title: `Course 1`, duration: 120, date: `07.09.2018`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`},
      {title: `Course 2`, duration: 130, date: `07.09.2019`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true},
      {title: `Course 3`, duration: 140, date: `07.09.2020`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`},
      {title: `Course 4`, duration: 150, date: `07.09.2021`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true},
      {title: `Course 2`, duration: 160, date: `07.09.2019`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false},
      {title: `Course 2`, duration: 180, date: `07.09.2019`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true},
      {title: `Course 2`, duration: 190, date: `07.09.2019`, description:`Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true},
    ]
  }

}
