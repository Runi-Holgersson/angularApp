import {Component, DoCheck, OnDestroy} from '@angular/core';
import {LoginPageService} from "../../login-page/login-page.service";
import {AuthorizationService} from "../../common/services/authorization.service";
import {Router} from "@angular/router";
import {fromPromise} from "rxjs/internal-compatibility";
import {from, Observable, Subscription} from "rxjs";
import {UserInfo} from "../../common/interfaces/interfaces";
import {takeWhile} from "rxjs/operators";

@Component({
  selector: 'app-login-button',
  templateUrl: './login-button.component.html',
  styleUrls: ['./login-button.component.sass']
})
export class LoginButtonComponent {
  constructor(public authorizationService: AuthorizationService, private router: Router) {
  }

  goToLoginPage() {
    this.authorizationService.logOut();
    this.router.navigate(["/home/login-page"])
  }
}
