import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGuestDialogComponent } from './new-guest-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewGuestDialogComponent],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
  ],
  exports: [NewGuestDialogComponent],
})
export class NewGuestDialogModule {}
