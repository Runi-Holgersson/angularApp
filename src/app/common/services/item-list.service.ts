import {Injectable, Input} from '@angular/core';
import {CourseContent} from "../interfaces/interfaces";
import {MOCKUP_COURSE_LIST, MOCKUP_COURSE_ITEM} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  public dataList: CourseContent[] = [];
  @Input() public courseItem: CourseContent = MOCKUP_COURSE_ITEM;

  constructor() {
    this.dataList = MOCKUP_COURSE_LIST;
  }

  getDataList(): CourseContent[] {
    return this.dataList;
  }

  createCourse(): void {
    this.dataList.push(this.courseItem);
  }

  getItemById(id: number): CourseContent {
    return this.dataList[id];
  }

  removeItem(id: number): boolean {
    this.dataList.splice(id, 1);
    return false;
  }

  updateCourse(id: number, item:CourseContent): void {
    this.dataList[id].title = item.title;
    this.dataList[id].date = item.date;
    this.dataList[id].description = item.description;
    this.dataList[id].duration = item.duration;
  }
}
