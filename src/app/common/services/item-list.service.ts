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
  public idCollection: number[] = [];

  constructor() {
    this._dataList = MOCKUP_COURSE_LIST;
  }

  setDataList(dataList: CourseContent[]): void {
    this._dataList = dataList;
  }

  get dataList(): CourseContent[] {
    return this._dataList;
  }

  createCourse(course: CourseContent): void {
    this.dataList.push(course);
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

  updateCourse(index: number, item: CourseContent): void {
    this.dataList[index].title = item.title;
    this.dataList[index].date = item.date;
    this.dataList[index].description = item.description;
    this.dataList[index].duration = item.duration;
  }

  getUniqueId(): number {
    let currentRandomId: number = Math.floor(Math.random() * 1000);
    while (this.idCollection.includes(currentRandomId)) {
      currentRandomId = Math.floor(Math.random() * 1000);
    }
    this.idCollection.push(currentRandomId);
    return currentRandomId;
  }
}
