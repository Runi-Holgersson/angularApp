import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseRedactorComponent } from './course-redactor.component';

describe('CourseRedactorComponent', () => {
  let component: CourseRedactorComponent;
  let fixture: ComponentFixture<CourseRedactorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseRedactorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseRedactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
