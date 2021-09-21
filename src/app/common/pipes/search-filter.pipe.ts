import {Pipe, PipeTransform} from '@angular/core';
import {CourseContent} from "../interfaces/interfaces";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {
  transform(array: CourseContent[], searchValue: string): CourseContent[] {
    array = array.filter(item => {
      return item.title.toLowerCase().indexOf(searchValue.toLowerCase(), 0) !== -1;
    })

    return array;
  }

}
