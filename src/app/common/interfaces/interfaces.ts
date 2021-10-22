export interface CourseContent {
  id: number,
  name: string,
  description: string,
  isTopRated?: boolean,
  date: string,
  authors: [{}],
  length: number,
}
export interface BreadCrumb {
  label: string;
  path: string;
}
