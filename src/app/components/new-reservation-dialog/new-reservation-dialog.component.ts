import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { TuiDay } from '@taiga-ui/cdk';
import { GuestService } from '../../services/guest.service';
import { RoomService } from '../../services/room.service';
import { Guest } from '../../shared/models/guest.model';
import { Room } from '../../shared/models/room.model';
import { DialogService } from '../../services/dialog.service';
@Component({
  selector: 'app-new-reservation-dialog',
  templateUrl: './new-reservation-dialog.component.html',
  styleUrls: ['./new-reservation-dialog.component.scss'],
})
export class NewReservationDialogComponent {
  reservationForm: FormGroup;
  rooms: Room[] = [];
  guests: Guest[] = [];
  min = TuiDay.currentLocal();
  constructor(
    private reservationService: ReservationService,
    private formBuilder: FormBuilder,
    private guestService: GuestService,
    private roomService: RoomService,
    private dialogService: DialogService,
  ) {
    this.reservationForm = this.formBuilder.group({
      guest_id: ['', Validators.required],
      room_id: ['', Validators.required],
      check_in_date: ['', Validators.required],
      check_out_date: ['', Validators.required],
    });
    this.guestService.getAllGuests(1, 1000).subscribe((guests: Guest[]) => {
      this.guests = guests;
    });
    this.roomService.getAllRooms(1, 1000).subscribe((rooms: Room[]) => {
      this.rooms = rooms;
    });
  }
  submitForm() {
    if (this.reservationForm.valid) {
      this.reservationService.createReservation(this.reservationForm.value).subscribe(() => {
        this.dialogService.open(null);
      });
    }
  }
  closeDialog(): void {
    this.dialogService.open(null);
  }
}
