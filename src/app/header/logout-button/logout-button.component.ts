import {Component, OnInit} from '@angular/core';
import {AuthorizationService} from "../../common/services/authorization.service";

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.sass']
})
export class LogoutButtonComponent implements OnInit {

  constructor(public authorizationService: AuthorizationService) {
  }

  onClick(): void {
    if (this.authorizationService.isAuthenticated()) {
      this.authorizationService.logOut();
    }
  }

  ngOnInit(): void {
  }

}
