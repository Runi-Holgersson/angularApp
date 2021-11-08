import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Author} from "../../common/interfaces/author.interface";
import {ItemListService} from "../../common/services/item-list.service";
import {AuthorsService} from "./authors.service";
import {Authors} from "../../common/interfaces/authors.interface";
import {group} from "@angular/animations";

@Component({
  selector: 'app-authors-input',
  templateUrl: './authors-input.component.html',
  styleUrls: ['./authors-input.component.sass']
})
export class AuthorsInputComponent implements OnInit{
  public newAuthor: Author = {
    id: 0,
    firstName: '',
    lastName: '',
  };
  public allAuthorsList: Authors[] = []
  @Input() public currentAuthors: Author[] = [];
  @Input() public authorsForm!: FormGroup;

  constructor(public itemListService: ItemListService, public authorsService: AuthorsService,
              public fb:FormBuilder) {
    this.currentAuthors = this.itemListService.courseItem.authors;
    this.allAuthorsList = this.authorsService.allAuthorsList;
    console.log(this.allAuthorsList);
    this.authorsForm = fb.group({
      author: ['', [Validators.required, Validators.minLength(1)]]
    })
  }
  addAuthor(): void{
    this.newAuthor.firstName = this.authorsForm.value.author.split(' ')[0];
    this.newAuthor.lastName = this.authorsForm.value.author.split(' ')[1];
    this.itemListService.courseItem.authors.push(Object.assign({}, this.newAuthor));
    console.log(this.authorsForm.value);
    // delete this.authorsForm.value.author from this.authorsService.allAuthorsList(so they'll not repeat)
    this.authorsForm.reset('author');
    // (this.authorsForm.get('author') as FormArray).push()
   // console.log(this.newAuthor);
  }
  clearInput(){
    this.authorsForm.reset('author');
  }
  removeAuthor(id:number): void{
    console.log(id);
    const index:number = this.authorsService.allAuthorsList.findIndex(author => author.id===id);
    if (index!==-1){
      this.authorsService.allAuthorsList.splice(index, 1);
    }
    console.log(this.authorsService.allAuthorsList);
  }
  removeTag(author: Author):void{
    console.log(author);
    const index:number =this.itemListService.courseItem.authors.findIndex(item => item.id === author.id);
    if (index!==-1){
      this.itemListService.courseItem.authors.splice(index, 1);
    }
    // delete author from this.itemListService.courseItem.authors(so view of tags will change)
  }
  ngOnInit(): void {
  }
}
