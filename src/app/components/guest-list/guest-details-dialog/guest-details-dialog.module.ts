import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestDetailsDialogComponent } from './guest-details-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
  declarations: [GuestDetailsDialogComponent],
  imports: [CommonModule, TuiDialogModule, TuiButtonModule, TuiLoaderModule],
  exports: [GuestDetailsDialogComponent],
})
export class GuestDetailsDialogModule {}
