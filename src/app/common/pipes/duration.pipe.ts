import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  transform(dateMinutes: number): string {
    if(dateMinutes < 60){
      return `${dateMinutes}min`
    } else {
      return `${Math.floor(dateMinutes/60)}h${dateMinutes%60}min`;
    }
  }

}
