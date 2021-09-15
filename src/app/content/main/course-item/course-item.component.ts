import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass'],
})
export class CourseItemComponent implements OnInit {
  @Input()
  public title: string = "";
  @Input()
  public duration: string = "";
  @Input()
  public description: string = "";
  @Input()
  public date: string = "";
  @Input()
  public topRated: boolean | undefined = false;
  public buttons: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.buttons = ["Edit", "Delete"];
  }

  enableBtn(event: any): void {
    console.log(`Button ${event} is enabled`);
  }
}
