import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {UserInfo} from "../interfaces/interfaces";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public userFullName: string = '';

  constructor(private http: HttpClient) {
  }

  logIn(token: string): void {
    localStorage.setItem("token", token);
  }

  logOut(): void {
    localStorage.setItem("token", '');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("token");
  }


  getUserInfo(): Observable<UserInfo> {
   return this.http.post<UserInfo>('http://localhost:3004/auth/userinfo', {}, {
      headers: new HttpHeaders({
        'Authorization': `${localStorage.getItem('token')}`
      })
    })
  }
}
