import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {

  public courseItem: string[]=[];

  constructor() {

  }

  ngOnInit(): void {
    this.courseItem = [
      `course 1`, `course 2`, `course 3`, `course 4`
    ]
  }

}
