import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.sass']
})
export class DateInputComponent implements OnInit {
  @Input()  public parentForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {

  }

}
