import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent {
  public inputValue: string = "";
  @Output() titleFind = new EventEmitter<string>();
  filterHandler(value: string) {
    this.titleFind.emit(value);
  }
}
