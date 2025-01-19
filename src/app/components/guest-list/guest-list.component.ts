import { Component } from '@angular/core';
import { Guest } from '../../shared/models/guest.model';
import { GuestService } from '../../services/guest.service';
import { DialogService } from '../../services/dialog.service';

@Component({
  selector: 'app-guest-details-dialog',
  templateUrl: './guest-details-dialog.component.html',
  styleUrls: ['./guest-details-dialog.component.scss'],
})
export class GuestDetailsDialogComponent {
  guest!: Guest;
  loading = true;
  constructor(private guestService: GuestService, private dialogService: DialogService) {
    this.fetchGuest();
  }

  fetchGuest() {
    this.loading = true;
    this.guestService.getGuestById(this.guest.guest_id).subscribe((guest) => {
      this.guest = guest;
      this.loading = false;
    });
  }

  closeDialog(): void {
    this.dialogService.open(null);
  }
}
