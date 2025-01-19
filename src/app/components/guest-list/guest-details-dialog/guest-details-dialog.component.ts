import { Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { TUI_DIALOG_CONTEXT } from '@taiga-ui/core';
import { Guest } from '../../../shared/models/guest.model';
import { GuestService } from '../../../services/guest.service';

@Component({
  selector: 'app-guest-details-dialog',
  templateUrl: './guest-details-dialog.component.html',
  styleUrls: ['./guest-details-dialog.component.scss'],
})
export class GuestDetailsDialogComponent {
  guest!: Guest;
  loading = true;
  constructor(
    @Inject(TUI_DIALOG_CONTEXT) private readonly context: TuiDialogContext<any, Guest>,
    private guestService: GuestService,
  ) {
    this.guest = context.data;
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
    this.context.completeWith(null);
  }
}
