import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressCircleComponent } from './progress-circle.component';
import { TuiProgressModule } from '@taiga-ui/kit';

@NgModule({
  declarations: [ProgressCircleComponent],
  imports: [CommonModule, TuiProgressModule],
  exports: [ProgressCircleComponent],
})
export class ProgressCircleModule {}
