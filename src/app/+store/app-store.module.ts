import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from "@ngrx/store";
import {authorsReducer, AuthorsEffect} from "./course-redactor";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([AuthorsEffect]),
    StoreModule.forFeature('authors', authorsReducer)
    // StoreModule.forRoot({})

  ]
})
export class AppStoreModule { }
