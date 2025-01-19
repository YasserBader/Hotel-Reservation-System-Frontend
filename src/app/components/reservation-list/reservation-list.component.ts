import { Component } from '@angular/core';
import { ReservationService } from '../../services/reservation.service';
import { Reservation } from '../../shared/models/reservation.model';
import { TuiTableSortEvent } from '@taiga-ui/cdk';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationListComponent {
  loading = true;
  reservations: Reservation[] = [];
  total = 0;
  page = 1;
  limit = 10;

  readonly columns = ['room_id', 'guest_id', 'check_in_date', 'check_out_date', 'status', 'action'];
  constructor(private reservationService: ReservationService) {
    this.fetchReservations();
  }

  fetchReservations() {
    this.loading = true;
    this.reservationService.getAllReservations(this.page, this.limit).subscribe((reservations) => {
      this.reservations = reservations;
      this.loading = false;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchReservations();
  }

  onSort(event: TuiTableSortEvent) {
    console.log('sort: ', event);
  }

  cancelReservation(reservation: Reservation) {
    this.reservationService.cancelReservation(reservation.reservation_id).subscribe(() => {
      this.fetchReservations();
    });
  }
}
