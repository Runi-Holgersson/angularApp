import {Injectable} from '@angular/core';
import {Author} from "../../common/interfaces/author.interface";
import {HttpClient} from "@angular/common/http";
import {DOMAIN_NAME} from "../../common/constants/constants";
import {Authors} from "../../common/interfaces/authors.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  public allAuthorsList: Authors[] = [];
  public authorsUrl: string = `${DOMAIN_NAME}/authors`;

  constructor(private http: HttpClient) {
  }

  getAuthorsList():Observable<Authors[]>{
   return this.http.get<Authors[]>(this.authorsUrl);
  }
}
