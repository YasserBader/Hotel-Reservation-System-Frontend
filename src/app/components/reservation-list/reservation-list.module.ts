import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list.component';
import { TuiTableModule, TuiPaginationModule, TuiButtonModule, TuiLoaderModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReservationListComponent],
  imports: [CommonModule, TuiTableModule, TuiPaginationModule, TuiButtonModule, TuiLoaderModule, RouterModule],
  exports: [ReservationListComponent],
})
export class ReservationListModule {}
