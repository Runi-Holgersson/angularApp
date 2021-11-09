import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Author} from "../../common/interfaces/author.interface";
import {ItemListService} from "../../common/services/item-list.service";
import {AuthorsService} from "./authors.service";
import {Authors} from "../../common/interfaces/authors.interface";
import {Observable, of} from "rxjs";
import {map, startWith} from "rxjs/operators";


@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.sass']
})
export class AuthorsInputComponent implements OnInit {
  public newAuthor: Author = {
    id: 0,
    firstName: '',
    lastName: '',
  };

  public allAuthorsList: Authors[] = [];
  public allAuthorsListFiltered: Observable<Authors[]>;
  @Input() public currentAuthors: Author[] = [];
  @Input() public authorsForm!: FormGroup;

  constructor(public itemListService: ItemListService, public authorsService: AuthorsService,
              public fb: FormBuilder) {
    this.currentAuthors = this.itemListService.courseItem.authors;
    this.allAuthorsList = this.authorsService.allAuthorsList;
    this.authorsForm = fb.group({
      author: ['']
    })
  }


  addAuthor(author: Authors): void {
    this.newAuthor.firstName = author.name.split(' ')[0];
    this.newAuthor.lastName = author.name.split(' ')[1];
    this.newAuthor.id = author.id;
    this.itemListService.courseItem.authors.push(Object.assign({}, this.newAuthor));
    const index: number = this.allAuthorsList.findIndex(item => item.id === author.id);
    this.allAuthorsList.splice(index, 1);
    this.authorsForm.reset('author');
  }

  removeTag(author: Author): void {
    const index: number = this.itemListService.courseItem.authors.findIndex(item => item.id === author.id);
    if (index !== -1) {
      this.itemListService.courseItem.authors.splice(index, 1);
      if (!this.allAuthorsList.some(item => item.id === author.id)) {
        this.allAuthorsList.push({id: author.id, name: `${author.firstName} ${author.lastName}`});
      }
      console.log(this.allAuthorsList, this.currentAuthors);
    }
    this.authorsForm.reset('author');
  }

  ngOnInit() {
    // this.allAuthorsListFiltered = of(this.allAuthorsList);
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
      return this.allAuthorsList.filter(author => (author.name.toLowerCase()).includes(filterValue));
    } else {
      return this.allAuthorsList;
    }
  }
}
