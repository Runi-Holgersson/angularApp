import {ChangeBorderDirective} from './change-border.directive';
import {ComponentFixture, TestBed} from "@angular/core/testing";
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

@Component({
  template: `<div appChangeBorder [creationDate]="date"></div>
  <div appChangeBorder [creationDate]="futureDate"></div>
  <div appChangeBorder [creationDate]="lastFortnightDate"></div>`
})
class HostComponent {
  public date: number = 0;
  public futureDate: number = 1634391989000;
  public lastFortnightDate: number = 1633443805000;
}

describe('ChangeBorderDirective', () => {
  let directive: ChangeBorderDirective;
  let fixture: ComponentFixture<HostComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChangeBorderDirective, HostComponent]
    })
    fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    directive = new ChangeBorderDirective(fixture);
  })

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
  it('should apply default border color', () => {
    const de = fixture.debugElement.queryAll(By.css('div'))[0];
    expect(de.nativeElement.style.borderColor).toBe('grey');
  });
  it('should apply blue border color when creation date greater then current date', () => {
    const de = fixture.debugElement.queryAll(By.css('div'))[1];
    directive.currentDate = 1633527989000;
    directive.creationDate = 1634391989000;
    directive.ngAfterViewInit();
    expect(de.nativeElement.style.borderColor).toBe('blue');
  });
  it('should apply green border color when course has been created less then 14 days ago', () => {
    const de = fixture.debugElement.queryAll(By.css('div'))[2];
    directive.currentDate = 1633527989000;
    directive.creationDate = 1633443805000;
    directive.ngAfterViewInit();
    expect(de.nativeElement.style.borderColor).toBe('green');
  });
});
