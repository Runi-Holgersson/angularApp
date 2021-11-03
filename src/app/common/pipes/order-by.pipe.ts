import {Pipe, PipeTransform} from '@angular/core';
import {CourseContent} from "../interfaces/course-content.interface";

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(array: CourseContent[]): CourseContent[] {
    array.sort((a, b) => {
      const firstDate: number = new Date(a.date).getTime();
      const secondDate: number = new Date(b.date).getTime();
      return (firstDate - secondDate);
    })
    return array;
  }
}
