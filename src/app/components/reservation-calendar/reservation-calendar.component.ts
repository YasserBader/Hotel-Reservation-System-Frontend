import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { TuiDay } from '@taiga-ui/cdk';

@Component({
  selector: 'app-reservation-calendar',
  templateUrl: './reservation-calendar.component.html',
  styleUrls: ['./reservation-calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationCalendarComponent {
  loading = true;
  busyDays: { [key: string]: number } | null = null;
  month = TuiDay.currentLocal();
  constructor(private reservationService: ReservationService) {
    this.fetchReservations();
  }
  fetchReservations() {
    this.loading = true;
    this.reservationService.getReservationsByMonth(this.month.year, this.month.month + 1).subscribe((busyDays) => {
      this.busyDays = busyDays;
      this.loading = false;
    });
  }
  onMonthChange(month: TuiDay) {
    this.month = month;
    this.fetchReservations();
  }

  getDayContent(day: TuiDay): string {
    if (this.busyDays === null) {
      return '';
    }

    const dateString = day.toString();
    return this.busyDays[dateString] ? `${this.busyDays[dateString]}` : '';
  }

  getProgress(day: TuiDay): number {
    if (this.busyDays === null) {
      return 0;
    }
    const dateString = day.toString();

    return this.busyDays[dateString] ? (this.busyDays[dateString] * 100) / 10 : 0;
  }
}
