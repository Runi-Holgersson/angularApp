import {Injectable} from '@angular/core';
import {CourseContent} from "../../common/interfaces/interfaces";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class MainListService {
  public idCollection: number[] = [];

  constructor(public datePipe: DatePipe) {
  }

  formatData(coursesArray: CourseContent[], coursesData: CourseContent[], format: string): CourseContent[] {
    coursesArray = coursesData.map(item => {
      item.date = this.datePipe.transform(item.date, format);
      return item;
    })
    return coursesArray;
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
