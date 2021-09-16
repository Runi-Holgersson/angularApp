import {Component, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass'],
})
export class SearchPanelComponent implements OnInit {
  public inputValue:string ="";
  @Output()titleFind = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  filterHandler(value:string) {
   this.titleFind.emit(value);
  }
}
