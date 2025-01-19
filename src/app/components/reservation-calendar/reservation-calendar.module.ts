import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCalendarComponent } from './reservation-calendar.component';
import { TuiCalendarModule, TuiLoaderModule, TuiProgressModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReservationCalendarComponent],
  imports: [CommonModule, TuiCalendarModule, FormsModule, TuiLoaderModule, TuiProgressModule, RouterModule],
  exports: [ReservationCalendarComponent],
})
export class ReservationCalendarModule {}
