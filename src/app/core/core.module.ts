import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { BreadcrumpsComponent } from './breadcrumps/breadcrumps.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import { CourseItemComponent } from './course-item/course-item.component';



@NgModule({
  declarations: [

    HeaderComponent,
        BreadcrumpsComponent,
        CoursesComponent,
        FooterComponent,
        CourseItemComponent
  ],
  exports: [
    HeaderComponent,
    BreadcrumpsComponent,
    CoursesComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule {

}
