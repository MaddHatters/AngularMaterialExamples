import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatepickerComponent } from './examples/datepicker/datepicker.component';
import { RadioComponent } from './examples/radio/radio.component';

const routes: Routes = [
  { path: 'datepicker', component: DatepickerComponent },
  { path: 'radio', component: RadioComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
