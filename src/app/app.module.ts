import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {ContentComponent} from "./content/content.component";
import {BreadcrumpsComponent} from "./content/breadcrumps/breadcrumps.component";
import {HeaderComponent} from "./content/header/header.component";
import {MainComponent} from "./content/main/main.component";
import {CourseItemComponent} from "./content/main/course-item/course-item.component";
import {LoaderComponent} from "./content/main/loader/loader.component";
import {SearchPanelComponent} from "./content/main/search-panel/search-panel.component";
import {FooterComponent} from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ContentComponent,
    BreadcrumpsComponent,
    HeaderComponent,
    MainComponent,
    CourseItemComponent,
    LoaderComponent,
    SearchPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
