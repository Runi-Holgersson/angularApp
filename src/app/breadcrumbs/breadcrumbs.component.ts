import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import {BreadCrumb} from "../common/interfaces/interfaces";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemListService} from "../common/services/item-list.service";


@Component({
  selector: 'app-breadcrumps',
  templateUrl: './breadcrumps.component.html',
  styleUrls: ['./breadcrumps.component.sass']
})
export class BreadcrumbsComponent implements OnChanges {
  public breadcrumbs: BreadCrumb[] = [];
  @Input() public currentUrl: string = '';
  public breadcrumb: BreadCrumb = {path: '', label: ''};
  public testArr:string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
              public itemListService: ItemListService) {
    // this.currentUrl = this.itemListService.currentUrl;
  }

  buildBreadcrumbs(): void {
    this.breadcrumbs = [];
    // this.activatedRoute.data.subscribe(data => console.log(data));
    this.currentUrl.split('/').map((item, index) => {
      if(item.length) {
        this.breadcrumb.label = item;
        this.breadcrumb.path = this.currentUrl.split('/').slice(0, index+1).join('/');
        this.breadcrumbs.push(Object.assign({},this.breadcrumb));
      }
    })
  };

  ngOnChanges() {
    this.buildBreadcrumbs();
  }
}
