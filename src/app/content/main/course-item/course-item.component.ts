import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass']
})
export class CourseItemComponent implements OnInit {
  @Input()
  public title: string = ``;
  @Input()
  public duration: string = ``;
  @Input()
  public description: string = ``;
  @Input()
  public date: string = ``;
  public btns: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.btns = [`Edit`, `Delete`];
  }
enableBtn(event:any):void {
    console.log(`Button ${event} is enabled`);
}
}
