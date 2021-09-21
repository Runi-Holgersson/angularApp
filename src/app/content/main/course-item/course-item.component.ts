import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {DurationPipe} from "../../../common/pipes/duration.pipe";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass'],
  providers: [DatePipe, UpperCasePipe, DurationPipe]
})
export class CourseItemComponent implements OnInit {
  @Input()
  public title: string = "";
  @Input()
  public duration: number = 0;
  @Input()
  public description: string = "";
  @Input()
  public date: any = "";
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
