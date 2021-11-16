import { Action } from '@ngrx/store';
import {Authors} from "../../common/interfaces/authors.interface";

export const GET_AUTHORS = '[Authors] GET_AUTHORS';
export const REMOVE_AUTHOR = '[Authors] REMOVE_AUTHOR';
export const ADD_AUTHOR = '[Authors] ADD_AUTHOR';

export class GetAuthors implements Action{
  readonly type = GET_AUTHORS;
}

// tslint:disable-next-line:max-classes-per-file
export class RemoveAuthor implements Action{
  readonly type = REMOVE_AUTHOR;
  constructor(public payload: Authors) {
  }
}

// tslint:disable-next-line:max-classes-per-file
export class AddAuthor implements Action{
  readonly type = ADD_AUTHOR;
  constructor(public payload: Authors) {
  }
}

export type AuthorsAction = GetAuthors | RemoveAuthor | AddAuthor;
