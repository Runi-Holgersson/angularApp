import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup} from "@angular/forms";
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

  constructor(public itemListService: ItemListService, public authorsService: AuthorsService) {
    this.currentAuthors = this.itemListService.courseItem.authors;
    this.allAuthorsList = this.authorsService.allAuthorsList;
    console.log(this.allAuthorsList);
    this.authorsForm = new FormGroup({
      author: new FormControl('')
    })
  }
  addAuthor(): void{
    this.newAuthor.firstName = this.authorsForm.value.author.split(' ')[0];
    this.newAuthor.lastName = this.authorsForm.value.author.split(' ')[1];
    this.itemListService.courseItem.authors.push(this.newAuthor);
    console.log(this.newAuthor);
  }
  clearInput(){
    this.authorsForm.reset('author');
  }
  removeTag(){

  }
  ngOnInit(): void {
  }
}
