import {ChangeDetectionStrategy, Component, DoCheck, Input} from '@angular/core';
import {ItemListService} from "../common/services/item-list.service";
import {CourseContent} from "../common/interfaces/course-content.interface";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ITEMS_IN_PAGE} from "../common/constants/constants";
import {Author} from "../common/interfaces/author.interface";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ThemePalette} from "@angular/material/core";
import {AuthorsService} from "./authors-input/authors.service";
import {MinAuthorsAmountValidator} from "./minAuthorsAmount.validator";

@Component({
  selector: 'app-course-redactor',
  templateUrl: './course-redactor.component.html',
  styleUrls: ['./course-redactor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseRedactorComponent implements DoCheck {
  // @Input()
  // public name: string = "";
  // @Input()
  // public length: number = 0;
//  @Input()
  // public description: string = "";
  // @Input()
//  public date: string = "";
  public palette: ThemePalette;
  @Input()
  public isTopRated: boolean | undefined = false;
  // @Input()
  // public authors: Author[] = [{id: 0, firstName: '', lastName: ''}];
  // @Input()
  // public id: number = 0;
  public buttonName: string = "";
  public checkboxStatus: string = "";
  public form: FormGroup;
  changingCourse: CourseContent;

  constructor(private http: HttpClient, public authorsService: AuthorsService,
              public itemListService: ItemListService, private router: Router,
              public fb: FormBuilder) {
    this.authorsService.getAuthorsList().subscribe(data => this.authorsService.allAuthorsList = data);
    // console.log(this.authorsService.allAuthorsList);
    this.palette = 'primary';
    this.form = fb.group({
      name: ["", [Validators.required,
        Validators.maxLength(50)]],
      description: ["", [Validators.required,
        Validators.maxLength(500)]],
      date: [''],
      length: [null, [Validators.required,
        Validators.pattern("^[0-9]+$")]],
      authors: this.fb.group({
        author: ['', [
          MinAuthorsAmountValidator(this.itemListService.courseItem.authors, 1)]]
      })
    });

    this.changingCourse = {
      name: this.form.value.name,
      description: this.form.value.description,
      date: this.form.value.date,
      isTopRated: this.isTopRated,
      length: this.form.value.length,
      id: 0,
      authors: [{id: 0, firstName: '', lastName: ''}],
    }
    if (!this.itemListService.isAddNewCourseOn) {
      // console.log(this.itemListService.courseItem);
      Object.assign(this.changingCourse, this.itemListService.courseItem);
      // console.log(this.changingCourse);
      this.buttonName = "Update courses list";
      this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
    } else {
      this.buttonName = "Add new course";
    }
  }

  get authorsForm(){
    return this.form.get('authors') as FormGroup;
  }

  changeCheckbox(): void {
    this.changingCourse.isTopRated = !this.changingCourse.isTopRated;
  }

  cancelled() {
    this.router.navigate(['home/courses']);
  }

  saved() {
    Object.assign(this.changingCourse, {
      name: this.form.value.name ? this.form.value.name : this.changingCourse.name,
      length: this.form.value.length ? this.form.value.length : this.changingCourse.length,
      description: this.form.value.description ? this.form.value.description : this.changingCourse.description,
      date: this.form.value.date ? this.form.value.date : this.changingCourse.date,
      authors: this.itemListService.courseItem.authors
    });
    console.log(this.form.value);
    console.log(this.changingCourse);
    if (!this.itemListService.isAddNewCourseOn) {
      this.itemListService.updateCourse(this.changingCourse);

      this.router.navigate(['home/courses']);
    } else {
      this.changingCourse.id = this.itemListService.getUniqueId();
      this.itemListService.createCourse(this.changingCourse);

      this.itemListService.isAddNewCourseOn = false;
      this.router.navigate(['home/courses']);
      this.itemListService.pagesArray = [];
    }
  }

  submit() {
    console.log("Form submitted", this.form);
  }

  ngDoCheck() {
    this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
  }
}
