import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './content/header/header.component';
import {BreadcrumpsComponent} from './content/breadcrumps/breadcrumps.component';
import {MainComponent} from './content/main/main.component';
import {CourseItemComponent} from './content/main/course-item/course-item.component';
import { ContentComponent } from './content/content.component';
import { SearchPanelComponent } from './content/main/search-panel/search-panel.component';
import { LoaderComponent } from './content/main/loader/loader.component';


@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumpsComponent,
    MainComponent,
    CourseItemComponent,
    ContentComponent,
    SearchPanelComponent,
    LoaderComponent
  ],
  exports: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule
  ]
})
export class CoreModule {

}
