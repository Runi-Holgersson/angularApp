import {Component, Input, DoCheck} from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";
import {CourseContent} from "../common/interfaces/interfaces";
import {CourseRedactorService} from "./course-redactor.service";

@Component({
  selector: 'app-course-redactor',
  templateUrl: './course-redactor.component.html',
  styleUrls: ['./course-redactor.component.sass']
})
export class CourseRedactorComponent implements DoCheck {
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
  public id: number = 0;
  public buttonName: string = "";
  public checkboxStatus: string = "";
  changingCourse: CourseContent = {
    title: this.title,
    description: this.description,
    date: this.date,
    topRated: this.topRated,
    duration: this.duration,
    id: this.id
  }

  constructor(public itemListService: ItemListService, private courseRedactorService: CourseRedactorService) {
    if (!this.courseRedactorService.isAddNewCourseOn) {
      this.changingCourse = this.itemListService.courseItem;
      this.buttonName = "Update courses list";
      this.changingCourse.topRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
    } else {
      this.buttonName = "Add new course";
    }
  }

  changeCheckbox(): void {
    this.changingCourse.topRated = !this.changingCourse.topRated;
  }

  clicked() {
    Object.assign(this.changingCourse, {
      title: this.title ? this.title : this.changingCourse.title,
      duration: this.duration ? this.duration : this.changingCourse.duration,
      description: this.description ? this.description : this.changingCourse.description,
      date: this.date ? this.date : this.changingCourse.date,
    });
    if (!this.courseRedactorService.isAddNewCourseOn) {
      this.itemListService.updateCourse(this.itemListService.indexOfId, this.changingCourse);
    } else {
      this.itemListService.createCourse(this.changingCourse);
      this.courseRedactorService.isAddNewCourseOn = false;
    }
    this.courseRedactorService.isRedactorOn = false;
  }

  ngDoCheck() {
    this.changingCourse.topRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
  }
}
