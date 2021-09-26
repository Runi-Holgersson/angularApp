import {Component, DoCheck} from '@angular/core';
import {LoginPageService} from "../../login-page/login-page.service";
import {AuthorizationService} from "../../common/services/authorization.service";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.sass']
})
export class LoginButtonComponent implements DoCheck {
  public userName: string | null = "Sign in";

  constructor(public loginPageService: LoginPageService, public authorizationService: AuthorizationService) {
  }

  ngDoCheck() {
    if (this.authorizationService.isAuthenticated()) {
      this.userName = this.authorizationService.getUserInfo();
    } else {
      this.userName = "Sign in";
    }
  }
}
