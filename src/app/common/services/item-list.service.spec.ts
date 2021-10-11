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
    service.setDataList(mockCourseList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should update indexOfId variable with index of item for id=1', () => {
    service.setIndexById(1);
    expect(service.indexOfId).toBe(0);
  });
  it('should update courseItem variable with item, which id=1', () => {
    service.setItemById(1);
    console.log(service.dataList);
    expect(service.courseItem.title).toBe('TestCourseTitle');
  })
  it('should update datalist with new item', () => {
service.createCourse(mockCourseItem);
expect(service.dataList[service.dataList.length-1].title).toBe('NEW course');
  })
  it('should update item by index=0 with new info', () => {
    service.updateCourse(0, mockCourseItem);
    expect(service.dataList[0].title).toBe('NEW course');
  })
});
