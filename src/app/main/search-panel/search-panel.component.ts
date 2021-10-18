import {Component, Output, EventEmitter} from '@angular/core';
import {CourseRedactorService} from "../../course-redactor/course-redactor.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent {
  constructor(public courseRedactorService: CourseRedactorService, private router: Router) {
  }

  public inputValue: string = "";
  @Output() titleFind = new EventEmitter<string>();

  filterHandler(value: string) {
    this.titleFind.emit(value);
  }

  addCourseClicked() {
    this.courseRedactorService.isAddNewCourseOn = true;
    this.router.navigate(['home/courses/new']);
    // this.courseRedactorService.isRedactorOn = true;
  }
}