import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Author} from "../../common/interfaces/author.interface";
import {ItemListService} from "../../common/services/item-list.service";
import {AuthorsService} from "./authors.service";
import {Authors} from "../../common/interfaces/authors.interface";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AppState} from "../../+store";
import * as AuthorsAction from "../../+store";


@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.sass']
})
export class AuthorsInputComponent implements OnInit {
  public allAuthorsListFiltered: Observable<Authors[]>;
  @Input() public currentAuthors: Author[] = [];
  @Input() public authorsForm!: FormGroup;
  @Input() public authors: Authors[];

  constructor(public itemListService: ItemListService, public authorsService: AuthorsService,
              public fb: FormBuilder, private store: Store<AppState>) {
    this.currentAuthors = this.itemListService.courseItem.authors;
    this.authorsForm = fb.group({
      author: ['']
    })
  }


  addAuthor(author: Authors): void {
    this.itemListService.courseItem.authors.push({
      firstName: author.name.split(' ')[0],
      lastName: author.name.split(' ')[1],
      id: author.id
    });
    this.store.dispatch(new AuthorsAction.RemoveAuthor(author));
    this.authorsForm.reset('author');
  }

  removeTag(author: Author): void {
    const index: number = this.itemListService.courseItem.authors.findIndex(item => item.id === author.id);
    if (index !== -1) {
      this.itemListService.courseItem.authors.splice(index, 1);
      this.store.dispatch(new AuthorsAction.AddAuthor({id: author.id, name: `${author.firstName} ${author.lastName}`}))
    }
    this.authorsForm.reset('author');
  }

  ngOnInit() {
    this.allAuthorsListFiltered = this.authorsForm.controls.author.valueChanges.pipe(
      startWith(''),
      map(value => {
        return this._filter(value);
      }),
    )
  }

  private _filter(value: string): Authors[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.authors.filter(author => (author.name.toLowerCase()).includes(filterValue));
    } else {
      return this.authors;
    }
  }
}
