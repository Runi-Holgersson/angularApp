import {Component} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  public imgUrl: string = `https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg`;
}
