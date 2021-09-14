import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent implements OnInit {
  @Input()
  public buttonTitle: string = "";

  @Output() onClick = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

}
