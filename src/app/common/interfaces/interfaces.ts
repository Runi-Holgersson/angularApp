export interface CourseContent {
  id: number,
  name: string,
  description: string,
  isTopRated?: boolean,
  date: string,
  authors: Author[],
  length: number,
}

export interface BreadCrumb {
  label: string,
  path: string,
}

export interface User {
  login: string,
  password: string,
}

export interface Token {
  token: string,
}

export interface Author {
  id: number,
  firstName: string,
  lastName: string
}

export interface Page {
  number: number,
  isActivated: boolean
}
export interface UserInfo {
  "id": number,
  "fakeToken": string,
  "name": {
    "first": string,
    "last": string,
  },
  "login": string,
  "password": string
}
