import { Component, Input } from '@angular/core';
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCircleComponent {
  @Input() value: number = 0;
  @Input() size: string = 'm';
  @Input() label: string = '';
}
