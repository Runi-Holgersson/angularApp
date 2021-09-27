import {Component, Input, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {DurationPipe} from "../../../common/pipes/duration.pipe";
import {CourseRedactorService} from "../../../course-redactor/course-redactor.service";
import {ItemListService} from "../../../common/services/item-list.service";

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
  @Input()
  public id:number = 0;
  public buttons: string[] = [];

  constructor(public courseRedactorService:CourseRedactorService, public itemListService:ItemListService) {
  }

  ngOnInit(): void {
    this.buttons = ["Edit", "Delete"];
  }

  enableBtn(event: string): void {
    if (event === "Edit"){
      this.itemListService.getItemById(this.id);
      this.itemListService.getIndexById(this.id);
      this.courseRedactorService.isRedactorOn = true;
    }
    if (event === "Delete") {
      this.itemListService.removeItem(this.id);
    }
  }
}
