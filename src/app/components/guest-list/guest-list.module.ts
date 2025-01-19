import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestListComponent } from './guest-list.component';
import { TuiTableModule, TuiPaginationModule, TuiButtonModule, TuiLoaderModule } from '@taiga-ui/kit';
import { GuestDetailsDialogModule } from './guest-details-dialog/guest-details-dialog.module';
import { NewGuestDialogModule } from './new-guest-dialog/new-guest-dialog.module';

@NgModule({
  declarations: [GuestListComponent],
  imports: [
    CommonModule,
    TuiTableModule,
    TuiPaginationModule,
    TuiButtonModule,
    TuiLoaderModule,
    GuestDetailsDialogModule,
    NewGuestDialogModule,
  ],
  exports: [GuestListComponent],
})
export class GuestListModule {}
