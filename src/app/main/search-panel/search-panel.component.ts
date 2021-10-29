import {Component, Output, EventEmitter} from '@angular/core';
import {Router} from "@angular/router";
import {ItemListService} from "../../common/services/item-list.service";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent {
  constructor(public itemListService: ItemListService, private router: Router) {
  }

  public inputValue: string = "";
  @Output() titleFind = new EventEmitter<string>();

  filterHandler(value: string) {
    this.titleFind.emit(value);
    this.inputValue = "";
  }

  addCourseClicked() {
    this.itemListService.isAddNewCourseOn = true;
    this.router.navigate(['home/courses/new']);
  }
  valueChanged(event:any){
    console.log(`value changed ${event.value}`);
  }
}
