import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {DurationPipe} from "../../common/pipes/duration.pipe";
import {CourseRedactorService} from "../../course-redactor/course-redactor.service";
import {ItemListService} from "../../common/services/item-list.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass'],
  providers: [DatePipe, UpperCasePipe, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit{
  @Input()
  public name: string = "";
  @Input()
  public length: number = 0;
  @Input()
  public description: string = "";
  @Input()
  public date: string = "";
  @Input()
  public isTopRated: boolean | undefined = false;
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
      this.router.navigate(['home/courses', this.id])
      this.itemListService.setItemById(this.id);
      this.itemListService.setIndexById(this.id);
      // this.activatedRoute.data.subscribe(data => console.log(data, 'edit course'));
    }
    if (event === "Delete") {
      this.itemListService.removeItem(this.id);
    }
  }
}
