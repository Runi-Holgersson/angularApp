import {ChangeDetectionStrategy, Component, DoCheck, Input, OnInit} from '@angular/core';
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
import {DATE_REG_EXP, NUMBER_REG_EXP} from "../common/constants/constants";
import {Store, select} from "@ngrx/store";
import {AppState, AuthorsState} from "../+store";
import {Observable} from "rxjs";
import * as AuthorsAction from "../+store";

@Component({
  selector: 'app-course-redactor',
  templateUrl: './course-redactor.component.html',
  styleUrls: ['./course-redactor.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseRedactorComponent implements DoCheck, OnInit {
  public palette: ThemePalette;
  @Input()
  public isTopRated: boolean | undefined = false;
  public buttonName: string = "";
  public checkboxStatus: string = "";
  public form: FormGroup;
  changingCourse: CourseContent;
  public authorsState$: Observable<AuthorsState>;

  constructor(private http: HttpClient, public authorsService: AuthorsService,
              public itemListService: ItemListService, private router: Router,
              public fb: FormBuilder, private store: Store<AppState>) {
    this.authorsState$ = this.store.pipe(select('authors'));
      this.store.dispatch(new AuthorsAction.LoadAuthors());
      // removed service
     /*this.authorsService.getAuthorsList().subscribe(data => {
      this.authorsService.allAuthorsList = data;
      this.store.dispatch(new AuthorsAction.SetAuthors(data));
    });*/
    this.palette = 'primary';
    this.form = fb.group({
      name: ["", [Validators.required,
        Validators.maxLength(10), Validators.minLength(5)]],
      description: ["", [Validators.required,
        Validators.maxLength(20), Validators.minLength(5)]],
      date: this.fb.group({
        date: ['', [Validators.required, Validators.pattern(DATE_REG_EXP)]]
      }),
      length: [null, [Validators.required,
        Validators.pattern(NUMBER_REG_EXP)]],
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
      Object.assign(this.changingCourse, this.itemListService.courseItem);
      this.buttonName = "Update courses list";
      this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
    } else {
      this.buttonName = "Add new course";
    }
  }

  get authorsForm() {
    return this.form.get('authors') as FormGroup;
  }

  get dateForm() {
    return this.form.get('date') as FormGroup;
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
      date: this.form.value.date.date ? this.form.value.date.date : this.changingCourse.date,
      authors: this.itemListService.courseItem.authors
    });
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

  ngOnInit() {
    this.store.pipe(select('authors')).subscribe(data => {
      // this.authorsService.allAuthorsList = data.data.slice(5, 5);
      console.log('from course-redactor', data.data);
    });

  }

  ngDoCheck() {
    this.changingCourse.isTopRated ? this.checkboxStatus = "checked" : this.checkboxStatus = "";
  }
}
