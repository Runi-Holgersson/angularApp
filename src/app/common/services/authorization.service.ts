import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  logIn(login: string, token: string): void {
    localStorage.setItem("login", login);
    localStorage.setItem("password", token);
  }

  logOut(): void {
    localStorage.setItem("login", "");
    localStorage.setItem("password", "");
  }

  IsAuthenticated(): boolean {
    return !!localStorage.getItem("login");
  }

  getUserInfo():string | null{
    return localStorage.getItem("login");
  }
}
