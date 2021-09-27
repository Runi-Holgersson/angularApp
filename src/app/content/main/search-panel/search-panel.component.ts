import {Component, Output, EventEmitter} from '@angular/core';
import {CourseRedactorService} from "../../../course-redactor/course-redactor.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent {
  constructor(public courseRedactorService: CourseRedactorService) {
  }

  public inputValue: string = "";
  @Output() titleFind = new EventEmitter<string>();

  filterHandler(value: string) {
    this.titleFind.emit(value);
  }

  addCourseClicked() {
    this.courseRedactorService.isAddNewCourseOn = true;
    this.courseRedactorService.isRedactorOn = true;
  }
}
