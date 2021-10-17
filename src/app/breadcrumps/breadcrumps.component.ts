import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {BreadCrumb} from "../common/interfaces/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemListService} from "../common/services/item-list.service";


@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.sass']
})
export class BreadcrumpsComponent {
  public breadcrumbs: BreadCrumb[] = [{path: '/courses', label: "Courses"},
    {path: 'courses/111', label: 'Course 1'}];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              public itemListService: ItemListService) {
  }

  buildBreadcrumbs() {
    this.activatedRoute.data.subscribe(data => console.log(data));
    console.log(this.router.url);
  }
}
