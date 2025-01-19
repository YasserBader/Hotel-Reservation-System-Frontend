import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomDetailsDialogComponent } from './room-details-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiLoaderModule, TuiTableModule } from '@taiga-ui/core';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [RoomDetailsDialogComponent],
  imports: [CommonModule, TuiDialogModule, TuiButtonModule, TuiLoaderModule, TuiTableModule, TuiLetModule],
  exports: [RoomDetailsDialogComponent],
})
export class RoomDetailsDialogModule {}
