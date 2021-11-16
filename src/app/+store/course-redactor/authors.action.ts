import { Action } from '@ngrx/store';
import {Authors} from "../../common/interfaces/authors.interface";

export enum AuthorsActionTypes {
  GET_AUTHORS = '[Authors] GET_AUTHORS',
  REMOVE_AUTHOR = '[Authors] REMOVE_AUTHOR',
  ADD_AUTHOR = '[Authors] ADD_AUTHOR'
}

export class GetAuthors implements Action{
  readonly type = AuthorsActionTypes.GET_AUTHORS;
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveAuthor implements Action{
  readonly type = AuthorsActionTypes.REMOVE_AUTHOR;
  constructor(public payload: Authors) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddAuthor implements Action{
  readonly type = AuthorsActionTypes.ADD_AUTHOR;
  constructor(public payload: Authors) {
  }
}

export type AuthorsAction = GetAuthors | RemoveAuthor | AddAuthor;
