import {Component} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {LoginPageService} from "./login-page.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
  constructor(public authorizationService: AuthorizationService, public loginPageService: LoginPageService,
              private router: Router) {
  }

  submitted() {
    this.authorizationService.logIn();
    this.router.navigate(['/home/courses']);
    // this.loginPageService.isLoginPageOn = false;
    console.log(this.authorizationService.isAuthenticated());
  }
}
