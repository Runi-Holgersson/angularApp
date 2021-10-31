import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'app-loading-overlay',
  templateUrl: './loading-overlay.component.html',
  styleUrls: ['./loading-overlay.component.sass']
})
export class LoadingOverlayComponent implements OnInit {

  constructor(public loadingService: LoadingService) {
    this.loadingService.loading = true;
  }

  ngOnInit(): void {
  }

}
