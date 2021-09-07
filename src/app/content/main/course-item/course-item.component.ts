import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {
  @Input()
  public item: string = ``;

  constructor() {
  }

  ngOnInit(): void {
  }

}
