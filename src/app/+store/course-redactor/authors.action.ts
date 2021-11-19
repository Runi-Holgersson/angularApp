import {Action} from '@ngrx/store';
import {Authors} from "../../common/interfaces/authors.interface";

export enum AuthorsActionTypes {
  REMOVE_AUTHOR = '[Authors] REMOVE_AUTHOR',
  ADD_AUTHOR = '[Authors] ADD_AUTHOR',
  LOAD_AUTHORS = '[Authors] LOAD_AUTHORS',
  LOAD_AUTHORS_SUCCESS = '[Authors] LOAD_AUTHORS_SUCCESS',
  LOAD_AUTHORS_ERROR = '[Authors] LOAD_AUTHORS_ERROR',
}

export class LoadAuthors implements Action {
  readonly type = AuthorsActionTypes.LOAD_AUTHORS;
}

// tslint:disable-next-line:max-classes-per-file
export class LoadAuthorsSuccess implements Action {
  readonly type = AuthorsActionTypes.LOAD_AUTHORS_SUCCESS;

  constructor(public payload: Authors[]) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class LoadAuthorsError implements Action {
  readonly type = AuthorsActionTypes.LOAD_AUTHORS_ERROR;

  constructor(public payload: any) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveAuthor implements Action {
  readonly type = AuthorsActionTypes.REMOVE_AUTHOR;

  constructor(public payload: Authors) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddAuthor implements Action {
  readonly type = AuthorsActionTypes.ADD_AUTHOR;

  constructor(public payload: Authors) {
  }
}

export type AuthorsAction = RemoveAuthor | AddAuthor | LoadAuthors | LoadAuthorsError | LoadAuthorsSuccess;
