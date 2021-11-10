import {Component} from '@angular/core';
import {AuthorizationService} from "../common/services/authorization.service";
import {LoginPageService} from "./login-page.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoadingService} from "../loading-overlay/loading.service";
import {User} from "../common/interfaces/user.interface";
import {Token} from "../common/interfaces/token.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.sass']
})
export class LoginPageComponent {
  public form: FormGroup;

  constructor(public authorizationService: AuthorizationService, private router: Router,
              private http: HttpClient) {
    this.form = new FormGroup({
      login: new FormControl('', [Validators.required,
        Validators.minLength(5)]),
      password: new FormControl('', [Validators.required,
        Validators.minLength(2)])
    })
  }

  submitted() {
    this.http.post<Token>('http://localhost:3004/auth/login', this.form.value)
      .subscribe(data => {
        this.authorizationService.logIn(data.token);
        this.router.navigate(['/home/courses']);
        this.authorizationService.getUserInfo();
        this.authorizationService.error = '';
      }, error => {
        console.log(error.message);
        this.authorizationService.error = error.statusText;
      });
  }
}
