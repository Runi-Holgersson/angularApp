import {CourseContent} from "../interfaces/interfaces";

export const MILLISECOND_IN_DAY:number = 1000*60*60*24;
export const MINUTES_IN_HOUR:number = 60;
export const MOCKUP_COURSE_LIST:CourseContent[]=[{
  title: `Course 1`, duration: 120, date: `07.09.2016`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`
},
  {
    title: `Course 2`, duration: 130, date: `07.09.2019`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
  },
  {
    title: `Course 3`, duration: 140, date: `07 Jun 2021`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`
  },
  {
    title: `Course 4`, duration: 150, date: `07.09.2022`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
  },
  {
    title: `Course 2`, duration: 160, date: `3, 12, 2018`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false
  },
  {
    title: `Course 2`, duration: 180, date: `07 Aug 2019`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
  },
  {
    title: `Course 2`, duration: 190, date: `09 09 2021`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: true
  },
  {
    title: `Course 2`, duration: 160, date: `3, 12, 2018`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, topRated: false
  }];
export const MOCKUP_COURSE_ITEM: CourseContent = {
  title: `New course`, duration: 140, date: `07 Jun 2021`, description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`
};
