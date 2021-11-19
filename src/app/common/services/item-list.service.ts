import {Injectable} from '@angular/core';
import {CourseContent} from "../interfaces/course-content.interface";
import {ITEMS_IN_PAGE, MOCKUP_COURSE_ITEM} from "../constants/constants";
import {HttpClient, HttpParams} from "@angular/common/http";
import {LoadingService} from "../../loading-overlay/loading.service";
import {delay} from "rxjs/operators";
import {DOMAIN_NAME} from "../constants/constants";


@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private _indexOfId: number = 0;
  private _dataList: CourseContent[] = [];
  private _courseItem: CourseContent = MOCKUP_COURSE_ITEM;
  public idCollection: number[] = [];
  public currentUrl: string = '';
  public isAddNewCourseOn: boolean = false;
  public currentPage: number = 1;
  public pagesArray: number[] = [];
  public coursesListUrl: string = `${DOMAIN_NAME}/courses`;
  public amountOfCourses: number = 0;


  constructor(private http: HttpClient, private loadingService: LoadingService) {
  }

  set dataList(dataList: CourseContent[]) {
    this._dataList = dataList;
  }

  get dataList(): CourseContent[] {
    return this._dataList;
  }

  getAmountOfPages(): number[] {
    this.pagesArray = [];
    this.http.get<CourseContent[]>(this.coursesListUrl)
      .subscribe(data => {
        for (let i = 1; i <= Math.ceil(data.length / ITEMS_IN_PAGE); i++) {
          this.pagesArray.push(i);
        }
      });
    return this.pagesArray;
  };

  getDatabaseList(start: number, count: number): CourseContent[] {
    setTimeout(() => this.loadingService.loading = true, 0);
    this.http.get<CourseContent[]>(this.coursesListUrl, {
      params: new HttpParams()
        .set('start', start.toString())
        .set('count', count.toString())
    })
      .pipe(delay(1500))
      .subscribe((data) => {
        this.dataList = data;
        this.loadingService.loading = false;
      });
    return this.dataList;
  }

  createCourse(course: CourseContent): void {
    this.http.post(this.coursesListUrl, course).subscribe(
      () => {
        this.getDatabaseList(ITEMS_IN_PAGE * (this.currentPage - 1), ITEMS_IN_PAGE);
      }
    );
  }

  searchCourse(textFragment: string): CourseContent[] {
    this.loadingService.loading = true;
    this.http.get<CourseContent[]>(this.coursesListUrl, {
      params: new HttpParams()
        .set('textFragment', textFragment)
    })
      .pipe(delay(1500))
      .subscribe((data) => {
        this.dataList = data;
        this.loadingService.loading = false;
      });
    return this.dataList;
  }

// use find
  setItemById(id: number): void {
    this.dataList.forEach((item) => {
      if (item.id === id) {
        this._courseItem = item;
      }
    });
  }

  get courseItem(): CourseContent {
    return this._courseItem;
  }

  get indexOfId(): number {
    return this._indexOfId;
  }

  setIndexById(id: number): void {
    this.dataList.forEach((item, index) => {
      if (item.id === id) {
        this._indexOfId = index;
      }
    })
  }

  deleteCourse(id: number): void {
    if (confirm("Do you really want to delete this course? Yes/No")) {
      this.http.delete<void>(`${this.coursesListUrl}/${id}`)
        .subscribe(() => {
            this.getDatabaseList(ITEMS_IN_PAGE * (this.currentPage - 1), ITEMS_IN_PAGE);
            this.getAmountOfPages();
          }
        );
    }
  }

  updateCourse(item: CourseContent): void {
    this.http.put<CourseContent>(`${this.coursesListUrl}/${item.id}`, item)
      .subscribe(() => {
        this.getDatabaseList(ITEMS_IN_PAGE * (this.currentPage - 1),
          ITEMS_IN_PAGE)
      })
  }

  getUniqueId(): number {
    this.http.get<CourseContent[]>(this.coursesListUrl)
      .subscribe(data => {
        data.forEach(course => this.idCollection.push(course.id));
      });
    let currentRandomId: number = Math.floor(Math.random() * 1000);
    while (this.idCollection.includes(currentRandomId)) {
      currentRandomId = Math.floor(Math.random() * 1000);
    }
    this.idCollection.push(currentRandomId);
    return currentRandomId;
  }
}
