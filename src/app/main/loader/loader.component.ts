import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass']
})
export class LoaderComponent {

  @Input() public courseItemsCount: number = 0;

  loadContent(): void {
    console.log(`content is loading..`);
  }
}
