import {CourseContent} from "../interfaces/course-content.interface";
import {Token} from "../interfaces/token.interface";

export const MILLISECOND_IN_DAY: number = 1000 * 60 * 60 * 24;
export const MINUTES_IN_HOUR: number = 60;

export const MOCKUP_COURSE_ITEM: CourseContent = {
  name: `NEW course`, length: 140, date: "2017-09-28T04:39:24+00:00", description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Ab deserunt, dignissimos dolores eaque eius eligendi.`, authors: [{id: 123, firstName: 'John', lastName: 'Tolkien'}], id: 0
};
export const ITEMS_IN_PAGE: number = 8;

export const STORAGE_KEYS: Token = {
  token: "token",
}

export const DOMAIN_NAME: string = "http://localhost:3004";



