import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime, filter, takeWhile, throttleTime} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SearchPanelService {
  public subject: Subject<any>;

  constructor() {
    this.subject = new Subject<any>()
      .pipe(
        debounceTime(1250),
        filter(value => value.length >= 3),
        filter(text => !!text)) as Subject<void>;
  }

}
