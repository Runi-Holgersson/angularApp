import {Injectable} from '@angular/core';
import {CourseContent} from "../interfaces/interfaces";
import {ITEMS_IN_PAGE, MOCKUP_COURSE_ITEM} from "../constants/constants";
import {HttpClient, HttpParams} from "@angular/common/http";


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
  public isPageButtonsNotActive: boolean = false;


  constructor(private http: HttpClient) {
  }

  set dataList(dataList: CourseContent[]) {
    this._dataList = dataList;
  }

  get dataList(): CourseContent[] {
    return this._dataList;
  }

  getDatabaseList(start: number, count: number): CourseContent[] {
    this.http.get<CourseContent[]>('http://localhost:3004/courses', {
      params: new HttpParams()
        .set('start', start.toString())
        .set('count', count.toString())
    })
      .subscribe((data) => {
        this.dataList = data;
      });
    return this.dataList;
  }

  createCourse(course: CourseContent): void {
    this.http.post(`http://localhost:3004/courses`, course).subscribe(
      () => {
        this.getDatabaseList(ITEMS_IN_PAGE * (this.currentPage - 1), ITEMS_IN_PAGE);
      }
    );
    // this.dataList.push(course);
  }

  searchCourse(textFragment: string): CourseContent[] {
    this.http.get<CourseContent[]>('http://localhost:3004/courses', {
      params: new HttpParams()
        .set('textFragment', textFragment)
    })
      .subscribe((data) => {
        this.dataList = data;
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


  removeItem(id: number): void {
    this.setIndexById(id);
    if (confirm("Do you really want to delete this course? Yes/No")) {
      this.dataList.splice(this.indexOfId, 1);
    }
  }

  updateCourse(item: CourseContent): void {
    this.http.put<CourseContent>(`http://localhost:3004/courses/${item.id}`, item)
      .subscribe(() => {
        this.getDatabaseList(ITEMS_IN_PAGE * (this.currentPage - 1),
          ITEMS_IN_PAGE)
      })
  }

  getUniqueId(): number {
    this.http.get<CourseContent[]>('http://localhost:3004/courses')
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
