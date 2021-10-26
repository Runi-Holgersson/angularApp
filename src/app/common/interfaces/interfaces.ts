export interface CourseContent {
  title: string,
  duration: number,
  date: number,
  description: string,
  topRated?: boolean,
  id: number
}
export interface BreadCrumb {
  label: string;
  path: string;
}
