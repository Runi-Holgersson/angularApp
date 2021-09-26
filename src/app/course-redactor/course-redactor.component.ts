import {Component, OnInit, Input} from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";
import {CourseContent} from "../common/interfaces/interfaces";
import {CourseRedactorService} from "./course-redactor.service";

@Component({
  selector: 'app-course-redactor',
  templateUrl: './course-redactor.component.html',
  styleUrls: ['./course-redactor.component.sass']
})
export class CourseRedactorComponent implements OnInit {
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
  public id: number = 0;
  changingCourse: CourseContent = {
    title: this.title,
    description: this.description,
    date: this.date,
    topRated: this.topRated,
    duration: this.duration,
    id: this.id
  }
  constructor(public itemListService: ItemListService, private courseRedactorService: CourseRedactorService) {
    this.changingCourse = this.itemListService.courseItem;
  }

  ngOnInit(): void {
  }

  clicked() {
    Object.assign(this.changingCourse, {
      title: this.title,
      duration: this.duration,
      description: this.description,
      date: this.date,
      topRated: this.topRated,
    });
    this.itemListService.updateCourse(this.itemListService.indexOfId, this.changingCourse);
    this.courseRedactorService.isRedactorOn = false;
    console.log(this.changingCourse);
  }
}
