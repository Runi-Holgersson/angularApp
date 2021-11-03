import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {STORAGE_KEYS, DOMAIN_NAME} from "../constants/constants";
import {UserInfo} from "../interfaces/user-info.interface";


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public error: string = '';
  public userInfoUrl: string = `${DOMAIN_NAME}/auth/userinfo`

  constructor(private http: HttpClient) {
  }

  logIn(token: string): void {
    localStorage.setItem(STORAGE_KEYS.token, token);
  }

  logOut(): void {
    localStorage.setItem(STORAGE_KEYS.token, '');
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(STORAGE_KEYS.token);
  }


  getUserInfo(): Observable<UserInfo> {
   return this.http.post<UserInfo>(this.userInfoUrl, {}, {
      headers: new HttpHeaders({
        'Authorization': `${localStorage.getItem(STORAGE_KEYS.token)}`
      })
    })
  }
}
