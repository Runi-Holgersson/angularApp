import {Component} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {LoginPageService} from "./login-page.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
  constructor(public authorizationService:AuthorizationService, public loginPageService:LoginPageService) {
  }
clicked(){
    this.authorizationService.logIn();
    this.loginPageService.isLoginPageOn = false;
    console.log(this.authorizationService.isAuthenticated());
}
}
