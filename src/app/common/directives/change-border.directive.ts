import {Directive, ElementRef, Input} from '@angular/core';
import {DatePipe} from "@angular/common";

@Directive({
  selector: '[appChangeBorder]',
  providers: [DatePipe]
})
export class ChangeBorderDirective {
  public currentDate: number = new Date().getTime();
  public creationDateToNumber: number = 0;
  @Input() public creationDate: any = 0;

  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.style.borderColor = "grey";
  }

  ngAfterViewInit() {
    this.creationDateToNumber = (new Date(this.creationDate)).getTime();
    if (this.creationDateToNumber < this.currentDate &&
      this.creationDateToNumber >= (this.currentDate-1000*60*60*24*14)) {
      this.elementRef.nativeElement.style.borderColor = "green";
    }
    if (this.creationDateToNumber > this.currentDate) {
      this.elementRef.nativeElement.style.borderColor = "blue";
    }
  }
}
