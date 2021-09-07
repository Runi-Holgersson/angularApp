import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.sass']
})
export class SearchPanelComponent implements OnInit {
public titleFind: string = `Find Course`;

  constructor() { }

  ngOnInit(): void {
  }
inputHandler($event: any){
   this.titleFind = $event.target.value;
   console.log(this.titleFind);
}
}
