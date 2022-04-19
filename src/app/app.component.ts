import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DateFnsAdapter, MAT_DATE_FNS_FORMATS } from '@angular/material-date-fns-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { enUS } from 'date-fns/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: DateAdapter, useClass: DateFnsAdapter },
    //{ provide: MAT_DATE_LOCALE, useValue: 'enUS' }, // FYI, this currently fails for date-fns in angular material 13.2.4. Have to use the locale object from date-fns
    { provide: MAT_DATE_LOCALE, useValue: enUS },
    { provide: MAT_DATE_FORMATS, useValue: MAT_DATE_FNS_FORMATS }
  ]
})
export class AppComponent {
  constructor() {
  }
}

