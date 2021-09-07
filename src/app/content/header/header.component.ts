import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
public imgUrl: string = `https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg`;
  constructor() { }

  ngOnInit(): void {
  }

}
