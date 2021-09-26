export class CourseRedactorService {
  private _isRedactorOn:boolean = false;
  get isRedactorOn(){
    return  this._isRedactorOn;
  }
  set isRedactorOn(isOpened){
    this._isRedactorOn=isOpened;
  }
}
