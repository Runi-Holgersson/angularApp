import {Component, Output, EventEmitter, ViewChild, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {ItemListService} from "../../common/services/item-list.service";
import {ElementRef} from "@angular/core";
import {fromEvent, Subscription} from "rxjs";
import {filter, map, throttleTime} from "rxjs/operators";
import {SearchPanelService} from "./search-panel.service";


@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent implements OnDestroy {
  public inputValue: string = "";
  @Output() titleFind = new EventEmitter<string>();
  // @ViewChild('searchInput', {static: true}) searchInput: ElementRef = null;
  // public source$ = fromEvent(this.searchInput.nativeElement, 'keyup');

  public subscription: Subscription;

  constructor(public itemListService: ItemListService, private router: Router,
              private searchService: SearchPanelService) {
    this.subscription = this.searchService.subject
      .subscribe(res => {
        this.itemListService.searchCourse(res);
        this.inputValue = '';
        console.log(res)
      });
  }


  filterHandler(value: string) {
    this.titleFind.emit(value);
    this.inputValue = "";
  }

  addCourseClicked() {
    this.itemListService.isAddNewCourseOn = true;
    this.router.navigate(['home/courses/new']);
  }

  valueChanged(event: any) {
    this.searchService.subject.next(event.value);
    console.log(`value changed ${event.value}`);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
