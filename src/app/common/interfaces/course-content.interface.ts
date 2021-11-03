import {Author} from "./author.interface";

export interface CourseContent {
  id: number,
  name: string,
  description: string,
  isTopRated?: boolean,
  date: string,
  authors: Author[],
  length: number,
}

