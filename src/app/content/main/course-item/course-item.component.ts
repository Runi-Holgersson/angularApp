import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {DurationPipe} from "../../../common/pipes/duration.pipe";
import {CourseRedactorService} from "../../../course-redactor/course-redactor.service";
import {ItemListService} from "../../../common/services/item-list.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass'],
  providers: [DatePipe, UpperCasePipe, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input()
  public title: string = "";
  @Input()
  public duration: number = 0;
  @Input()
  public description: string = "";
  @Input()
  public date: number = 0;
  @Input()
  public topRated: boolean | undefined = false;
  @Input()
  public id:number = 0;
  public buttons: string[] = [];

  constructor(public courseRedactorService:CourseRedactorService, public itemListService:ItemListService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.buttons = ["Edit", "Delete"];
  }

  enableBtn(event: string): void {
    if (event === "Edit"){
      this.itemListService.setItemById(this.id);
      this.itemListService.setIndexById(this.id);
      this.courseRedactorService.isRedactorOn = true;
      this.router.navigate(['/courses', this.id])
    }
    if (event === "Delete") {
      this.itemListService.removeItem(this.id);
    }
  }
}
