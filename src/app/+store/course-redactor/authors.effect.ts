import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import * as AuthorsAction from "../../+store";
import {EMPTY, Observable, of} from "rxjs";
import {catchError, map, mergeMap} from "rxjs/operators";
import {Authors} from "../../common/interfaces/authors.interface";
import {DOMAIN_NAME} from "../../common/constants/constants";
import {AuthorsService} from "../../course-redactor/authors-input/authors.service";


@Injectable()
export class AuthorsEffect {
  public authorsUrl: string = `${DOMAIN_NAME}/authors`;

  loadAuthors$ = createEffect(() => this.actions$.pipe(
    ofType('[Authors] LOAD_AUTHORS'),
    mergeMap(() => this.http.get<Authors[]>(this.authorsUrl).pipe(
      map(authorsList => ({type: '[Authors] LOAD_AUTHORS_SUCCESS', payload:authorsList })),
      catchError((error) => of ({type: '[Authors] LOAD_AUTHORS_ERROR', payload: error.status}))
    ))
  ))

  constructor(private actions$: Actions, private http: HttpClient, private service: AuthorsService) {
  }

}
