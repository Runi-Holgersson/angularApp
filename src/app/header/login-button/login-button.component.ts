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
export class LoginButtonComponent implements OnDestroy {
  public userName: string | null = "Sign in";
  public userInfo: Subscription;

  constructor(public authorizationService: AuthorizationService, private router: Router) {
    this.userInfo = from(this.authorizationService.getUserInfo())
      .pipe(
        // takeWhile(this.authorizationService.isAuthenticated)
      )
      .subscribe(data => {
        this.userName = `${data.name.first} ${data.name.last}`;
      });
  }

  goToLoginPage() {
    this.router.navigate(["/home/login-page"])
  }

  /*ngDoCheck() {
      if (this.authorizationService.isAuthenticated()) {
        from(this.authorizationService.getUserInfo())
          .subscribe(data => {
            this.userName = `${data.name.first} ${data.name.last}`;
          });
        // this.userName = this.authorizationService.userFullName;
      } else {
        this.userName = "Sign in";
      }
    }*/
  ngOnDestroy() {
    this.userInfo.unsubscribe();
    this.userName = 'Sign in';
  }
}
