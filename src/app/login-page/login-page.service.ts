export class LoginPageService {
  private _isLoginPageOn:boolean = false;
  get isLoginPageOn(){
  return  this._isLoginPageOn;
  }
  set isLoginPageOn(login){
    this._isLoginPageOn=login;
  }
}
