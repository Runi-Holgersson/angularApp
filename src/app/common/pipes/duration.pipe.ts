import { Pipe, PipeTransform } from '@angular/core';
import {MINUTES_IN_HOUR} from "../constants/constants";

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(dateMinutes: number): string {
    if(dateMinutes < MINUTES_IN_HOUR){
      return `${dateMinutes}min`
    } else {
      return `${Math.floor(dateMinutes/MINUTES_IN_HOUR)}h${dateMinutes%MINUTES_IN_HOUR}min`;
    }
  }

}
