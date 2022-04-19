import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  @ViewChild('picker')
  public datepicker: any;
  minDate: Date;
  maxDate: Date;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  formGroup = new FormGroup({
    datepicker: new FormControl()
  });

  title = 'angular-material-examples';

  constructor() {
    // this.datepicker.setLocale(enUS)
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 20, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
}
