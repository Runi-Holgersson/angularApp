import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.sass']
})
export class DateInputComponent implements OnInit {
  @Input() public dateForm!: FormGroup;

  constructor(public fb: FormBuilder) {
    this.dateForm = fb.group({
      date: ['']
    })
  }

  ngOnInit(): void {

  }

}
