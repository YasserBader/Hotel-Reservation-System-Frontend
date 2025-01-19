import { Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { TUI_CONTEXT } from '@taiga-ui/cdk';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuestService } from '../../../services/guest.service';

@Component({
  selector: 'app-new-guest-dialog',
  templateUrl: './new-guest-dialog.component.html',
  styleUrls: ['./new-guest-dialog.component.scss'],
})
export class NewGuestDialogComponent {
  guestForm: FormGroup;
  constructor(
    @Inject(TUI_CONTEXT) private readonly context: TuiDialogContext<any>,
    private guestService: GuestService,
    private formBuilder: FormBuilder,
  ) {
    this.guestForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.guestForm.valid) {
      this.guestService.createGuest(this.guestForm.value).subscribe(() => {
        this.context.completeWith(null);
      });
    }
  }

  closeDialog(): void {
    this.context.completeWith(null);
  }
}
