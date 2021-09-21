import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent implements OnInit {

  @Input() public courseItemsCount: number = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  loadContent(): void {
    console.log(`content is loading..`);
  }
}
