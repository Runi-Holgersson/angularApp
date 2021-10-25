import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {DatePipe, UpperCasePipe} from "@angular/common";
import {DurationPipe} from "../../common/pipes/duration.pipe";
import {ItemListService} from "../../common/services/item-list.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CourseContent} from "../../common/interfaces/interfaces";
import {ITEMS_IN_PAGE} from "../../common/constants/constants";

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.sass'],
  providers: [DatePipe, UpperCasePipe, DurationPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  @Input()
  public name: string = "";
  @Input()
  public length: number = 0;
  @Input()
  public description: string = "";
  @Input()
  public date: string = "";
  @Input()
  public isTopRated: boolean | undefined = false;
  @Input()
  public id: number = 0;
  public buttons: string[] = [];

  constructor(public itemListService: ItemListService, private http: HttpClient,
              private router: Router) {
  }

  ngOnInit(): void {
    this.buttons = ["Edit", "Delete"];
  }

  enableBtn(event: string): void {
    if (event === "Edit") {
      this.router.navigate(['home/courses', this.id])
      this.itemListService.setItemById(this.id);
      this.itemListService.setIndexById(this.id);
      this.itemListService.isAddNewCourseOn = false;
    }
    if (event === "Delete") {
      this.http.delete<void>(`http://localhost:3004/courses/${this.id}`)
        .subscribe(() =>{
            this.itemListService.getDatabaseList(ITEMS_IN_PAGE * (this.itemListService.currentPage - 1), ITEMS_IN_PAGE)
            console.log(ITEMS_IN_PAGE * (this.itemListService.currentPage - 1));
        }
        );
    }
  }
}
