import {Component} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {LoginPageService} from "./login-page.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {User, Token} from "../common/interfaces/interfaces";
import {Observable} from "rxjs";
import {LoadingService} from "../loading-overlay/loading.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
  public user: User = {
    login: '',
    password: ''
  };

  constructor(public authorizationService: AuthorizationService, private router: Router,
              private http: HttpClient) {
  }

  submitted() {
    this.http.post<Token>('http://localhost:3004/auth/login', this.user)
      .subscribe(data => {
        this.authorizationService.logIn(data.token);
        this.router.navigate(['/home/courses']);
        this.authorizationService.getUserInfo();
      });
  }
}
