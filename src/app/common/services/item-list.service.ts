import {Injectable} from '@angular/core';
import {CourseContent} from "../interfaces/interfaces";
import {MOCKUP_COURSE_LIST, MOCKUP_COURSE_ITEM} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  private _indexOfId: number = 0;
  private _dataList: CourseContent[] = [];
  private _courseItem: CourseContent = MOCKUP_COURSE_ITEM;

  constructor() {
    this._dataList = MOCKUP_COURSE_LIST;
  }

  setDataList(dataList: CourseContent[]): void {
    this._dataList = dataList;
  }

  getDataList(): CourseContent[] {
    return this._dataList;
  }

  createCourse(course: CourseContent): void {
    this._dataList.push(course);
  }

// use find
  setItemById(id: number): void {
    this._dataList.forEach((item) => {
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
    this._dataList.forEach((item, index) => {
      if (item.id === id) {
        this._indexOfId = index;
      }
    })
  }


  removeItem(id: number): void {
    this.setIndexById(id);
    if (confirm("Do you really want to delete this course? Yes/No")) {
      this._dataList.splice(this.indexOfId, 1);
    }
  }

  updateCourse(index: number, item: CourseContent): void {
    this._dataList[index].title = item.title;
    this._dataList[index].date = item.date;
    this._dataList[index].description = item.description;
    this._dataList[index].duration = item.duration;
  }
}
