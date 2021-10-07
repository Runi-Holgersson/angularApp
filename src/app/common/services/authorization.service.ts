export class AuthorizationService {
  public email: string = "";
  public password: string = "";

  logIn(): void {
    localStorage.setItem("login", this.email);
    localStorage.setItem("password", this.password);
  }

  logOut(): void {
    this.email = "";
    this.password = ""
    this.logIn();
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem("login");
  }

  getUserInfo(): string | null {
    return localStorage.getItem("login");
  }
}
