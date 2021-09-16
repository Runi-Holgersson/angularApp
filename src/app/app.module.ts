import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {ButtonComponent} from './content/main/course-item/button/button.component';
import { ChangeBorderDirective } from './common/directives/change-border.directive';
import { DurationPipe } from './common/pipes/duration.pipe';
import { SearchFilterPipe } from './common/pipes/search-filter.pipe';




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
    SearchPanelComponent,
    ButtonComponent,
    ChangeBorderDirective,
    DurationPipe,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
