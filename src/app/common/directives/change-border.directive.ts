import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appChangeBorder]'
})
export class ChangeBorderDirective {
  @Input() public currentDate: number = 0;
  @Input() public creationDate: number = 10;

  constructor(private elementRef: ElementRef,) {
    if (this.creationDate < this.currentDate && this.creationDate >= this.currentDate - 14) {
      this.elementRef.nativeElement.style.borderColor = "green";
    }
    if (this.creationDate > this.currentDate) {
      this.elementRef.nativeElement.style.borderColor = "blue";
    }
    console.log(`${this.currentDate} ${this.creationDate}`);
  }

}
