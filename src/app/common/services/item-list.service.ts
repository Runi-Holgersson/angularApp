import {Injectable, Input} from '@angular/core';
import {CourseContent} from "../interfaces/interfaces";
import {MOCKUP_COURSE_LIST, MOCKUP_COURSE_ITEM} from "../constants/constants";

@Injectable({
  providedIn: 'root'
})
export class ItemListService {
  public indexOfId: number = 0;
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

  getItemById(id: number): CourseContent | boolean {
    this.dataList.forEach((item) => {
      if (item.id === id) {
        return item;
      } else {
        return false
      }
    });
    return false;
  }

  getIndexById(id: number): void {
    this.dataList.forEach((item, index) => {
      if (item.id === id) {
        this.indexOfId = index;
      }
    })
  }


  removeItem(id: number): void {
    this.getIndexById(id);
    console.log(this.indexOfId);
    if (confirm("Do you really want to delete this course? Yes/No")) {
      this.dataList.splice(this.indexOfId, 1);
    }
  }

  updateCourse(id: number, item: CourseContent): void {
    this.dataList[id].title = item.title;
    this.dataList[id].date = item.date;
    this.dataList[id].description = item.description;
    this.dataList[id].duration = item.duration;
  }
}
