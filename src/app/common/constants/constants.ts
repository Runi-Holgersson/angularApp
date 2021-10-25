import {CourseContent} from "../interfaces/interfaces";

export const MILLISECOND_IN_DAY: number = 1000 * 60 * 60 * 24;
export const MINUTES_IN_HOUR: number = 60;
/*export const MOCKUP_COURSE_LIST: CourseContent[] = [{
  title: `TestCourseTitle`, duration: 120, date: 1632143639000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, id: 1
},
  {
    title: `TestUpdateCourseTitle`, duration: 130, date: 1467897239000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true, id: 2
  },
  {
    title: `Course 3`, duration: 140, date: 1594646039000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, id: 0
  },
  {
    title: `Course 4`, duration: 150, date: 1518527639000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true, id: 0
  },
  {
    title: `Course 2`, duration: 160, date: 1614431639000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false, id: 0
  },
  {
    title: `Course 7`, duration: 180, date: 1549804439000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true, id: 0
  },
  {
    title: `Course 5`, duration: 190, date: 1632748439000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true, id: 0
  },
  {
    title: `Course 6`, duration: 160, date: 1640092439000, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false, id: 0
  }];*/
export const MOCKUP_COURSE_ITEM: CourseContent = {
  name: `NEW course`, length: 140, date: "2017-09-28T04:39:24+00:00", description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, authors: [{id: 123, firstName: 'John', lastName: 'Tolkien'}], id: 0
};
