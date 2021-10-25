import {ChangeDetectionStrategy, Component, DoCheck, Input} from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";
import {CourseContent, Author} from "../common/interfaces/interfaces";
import {CourseRedactorService} from "./course-redactor.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-course-redactor',
  templateUrl: './course-redactor.component.html',
  styleUrls: ['./course-redactor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseRedactorComponent implements DoCheck {
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
  public authors: Author[] = [{id: 0, firstName: '', lastName: ''}];
  @Input()
  public id: number = 0;
  public buttonName: string = "";
  public checkboxStatus: string = "";
  changingCourse: CourseContent = {
    name: this.name,
    description: this.description,
    date: this.date,
    isTopRated: this.isTopRated,
    length: this.length,
    id: this.id,
    authors: [{id: 0, firstName: '', lastName: ''}],
  }

  constructor(public itemListService: ItemListService, private courseRedactorService: CourseRedactorService,
              private router: Router) {
    if (!this.itemListService.isAddNewCourseOn) {
      this.changingCourse = this.itemListService.courseItem;
      this.buttonName = "Update courses list";
      this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
    } else {
      this.buttonName = "Add new course";
    }
  }

  changeCheckbox(): void {
    this.changingCourse.isTopRated = !this.changingCourse.isTopRated;
  }

  cancelled() {
    this.router.navigate(['home/courses']);
  }

  saved() {
    Object.assign(this.changingCourse, {
      title: this.name ? this.name : this.changingCourse.name,
      duration: this.length ? this.length : this.changingCourse.length,
      description: this.description ? this.description : this.changingCourse.description,
      date: this.date ? this.date : this.changingCourse.date,
    });
    if (!this.courseRedactorService.isAddNewCourseOn) {
      this.itemListService.updateCourse(this.itemListService.indexOfId, this.changingCourse);
      this.router.navigate(['home/courses']);
    } else {
      this.itemListService.createCourse(this.changingCourse);
      this.courseRedactorService.isAddNewCourseOn = false;
      this.router.navigate(['home/courses']);
    }
  }

  ngDoCheck() {
    this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
  }
}
