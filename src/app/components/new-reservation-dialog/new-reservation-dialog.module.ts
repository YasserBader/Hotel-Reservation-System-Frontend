import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReservationDialogComponent } from './new-reservation-dialog.component';
import { TuiDialogModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/kit';
import { TuiDataListModule } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/kit';
import { TuiCalendarModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewReservationDialogComponent],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiCalendarModule,
  ],
  exports: [NewReservationDialogComponent],
})
export class NewReservationDialogModule {}
