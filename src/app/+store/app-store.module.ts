import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authorsReducer} from "./course-redactor";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('authors', authorsReducer)
    // StoreModule.forRoot({})

  ]
})
export class AppStoreModule { }
