import {TestBed} from '@angular/core/testing';

import {ItemListService} from './item-list.service';
import {MOCKUP_COURSE_LIST, MOCKUP_COURSE_ITEM, MOCKUP_COURSE_LIST_AFTER} from "../constants/constants";
import {CourseContent} from "../interfaces/interfaces";

describe('ItemListService', () => {
  let service: ItemListService;
  const mockCourseList: CourseContent[] = MOCKUP_COURSE_LIST;
  const mockCourseItem: CourseContent = MOCKUP_COURSE_ITEM;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemListService);
    service.dataList = mockCourseList;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
