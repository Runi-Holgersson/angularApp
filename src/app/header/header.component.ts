import {Component} from '@angular/core';
import {Subscription} from "rxjs";
import {AuthorizationService} from "../common/services/authorization.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent {
  public imgUrl: string = `https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg`;

  constructor(public authService: AuthorizationService) {
  }
}
