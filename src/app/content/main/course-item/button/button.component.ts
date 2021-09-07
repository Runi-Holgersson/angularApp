import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input()
  public btnTitle: string = ``;

  constructor() {
  }

  @Output() onClick = new EventEmitter();

  ngOnInit(): void {
  }

}
