# Project Documentation

## Directory Structure

```
├── angular.json
├── app
│   ├── app-routing.module.ts
│   ├── app.component.html
│   ├── app.component.scss
│   ├── app.component.ts
│   ├── app.module.ts
│   ├── components
│   │   ├── guest-list
│   │   │   ├── guest-details-dialog
│   │   │   │   ├── guest-details-dialog.component.html
│   │   │   │   ├── guest-details-dialog.component.scss
│   │   │   │   ├── guest-details-dialog.component.ts
│   │   │   │   └── guest-details-dialog.module.ts
│   │   │   ├── guest-list.component.html
│   │   │   ├── guest-list.component.scss
│   │   │   ├── guest-list.component.ts
│   │   │   ├── guest-list.module.ts
│   │   │   └── new-guest-dialog
│   │   │       ├── new-guest-dialog.component.html
│   │   │       ├── new-guest-dialog.component.scss
│   │   │       ├── new-guest-dialog.component.ts
│   │   │       └── new-guest-dialog.module.ts
│   │   ├── new-reservation-dialog
│   │   │   ├── new-reservation-dialog.component.html
│   │   │   ├── new-reservation-dialog.component.scss
│   │   │   ├── new-reservation-dialog.component.ts
│   │   │   └── new-reservation-dialog.module.ts
│   │   ├── progress-circle
│   │   │   ├── progress-circle.component.html
│   │   │   ├── progress-circle.component.scss
│   │   │   ├── progress-circle.component.ts
│   │   │   └── progress-circle.module.ts
│   │   ├── reservation-calendar
│   │   │   ├── reservation-calendar.component.html
│   │   │   ├── reservation-calendar.component.scss
│   │   │   ├── reservation-calendar.component.ts
│   │   │   └── reservation-calendar.module.ts
│   │   ├── reservation-list
│   │   │   ├── reservation-list.component.html
│   │   │   ├── reservation-list.component.scss
│   │   │   ├── reservation-list.component.ts
│   │   │   └── reservation-list.module.ts
│   │   ├── room-list
│   │   │   ├── room-details-dialog
│   │   │   │   ├── room-details-dialog.component.html
│   │   │   │   ├── room-details-dialog.component.scss
│   │   │   │   ├── room-details-dialog.component.ts
│   │   │   │   └── room-details-dialog.module.ts
│   │   │   ├── room-list.component.html
│   │   │   ├── room-list.component.scss
│   │   │   ├── room-list.component.ts
│   │   │   └── room-list.module.ts
│   │   └── sidebar
│   │       ├── sidebar.component.html
│   │       ├── sidebar.component.scss
│   │       ├── sidebar.component.ts
│   │       └── sidebar.module.ts
│   ├── services
│   │   ├── guest.service.ts
│   │   ├── reservation.service.ts
│   │   └── room.service.ts
│   └── shared
│       ├── components
│       │   └── progress-circle
│       │       ├── progress-circle.component.html
│       │       ├── progress-circle.component.scss
│       │       ├── progress-circle.component.ts
│       │       └── progress-circle.module.ts
│       ├── constants
│       │   └── constants.ts
│       └── models
│           ├── guest.model.ts
│           ├── reservation.model.ts
│           └── room.model.ts
├── assets
├── environments
│   ├── environment.prod.ts
│   └── environment.ts
├── index.html
├── main.ts
├── polyfills.ts
├── styles.scss
├── test.ts
└── tsconfig.json

```

## File: src\angular.json
```
{
  "$schema": "../node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "hotel-reservation-app": {
      "projectType": "application",
      "schematics": {
        "@schematics/angular:component": {
          "style": "scss"
        }
      },
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            "outputPath": "dist/hotel-reservation-app",
            "index": "src/index.html",
            "main": "src/main.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.json",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": [
              "src/styles.scss",
              "node_modules/@taiga-ui/core/styles/taiga-ui-fonts.scss",
              "node_modules/@taiga-ui/core/styles/taiga-ui-global.scss",
              "node_modules/@taiga-ui/styles/taiga-ui-theme.scss"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "outputHashing": "all"
            },
            "development": {
              "vendorChunk": true,
              "extractLicenses": false,

              "namedChunks": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "hotel-reservation-app:production"
            },
            "development": {
              "buildTarget": "hotel-reservation-app:development"
            }
          },
          "defaultConfiguration": "development"
        },
        "extract-i18n": {
          "builder": "@angular-devkit/build-angular:extract-i18n",
          "options": {
            "buildTarget": "hotel-reservation-app:build"
          }
        },
        "test": {
          "builder": "@angular-devkit/build-angular:karma",
          "options": {
            "main": "src/test.ts",
            "polyfills": "src/polyfills.ts",
            "tsConfig": "src/tsconfig.json",
            "karmaConfig": "karma.conf.js",
            "inlineStyleLanguage": "scss",
            "assets": ["src/favicon.ico", "src/assets"],
            "styles": ["src/styles.scss"],
            "scripts": []
          }
        }
      }
    }
  },
  "cli": {
    "analytics": false
  }
}

```

---

## File: src\app\app-routing.module.ts
```
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestListComponent } from './components/guest-list/guest-list.component';
import { RoomListComponent } from './components/room-list/room-list.component';
import { ReservationListComponent } from './components/reservation-list/reservation-list.component';
import { ReservationCalendarComponent } from './components/reservation-calendar/reservation-calendar.component';

const routes: Routes = [
  { path: 'guests', component: GuestListComponent },
  { path: 'rooms', component: RoomListComponent },
  { path: 'reservations', component: ReservationListComponent },
  { path: 'reservations/calendar', component: ReservationCalendarComponent },
  { path: '', redirectTo: '/guests', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

```

---

## File: src\app\app.component.html
```
<div class="flex h-screen">
  <app-sidebar class="w-64"></app-sidebar>
  <div class="flex-1 p-4">
    <router-outlet></router-outlet>
  </div>
</div>

```

---

## File: src\app\app.component.scss
```

```

---

## File: src\app\app.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotel-reservation-app';
}

```

---

## File: src\app\app.module.ts
```
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TuiRootModule, TuiDialogModule, TuiAlertModule } from '@taiga-ui/core';
import {
  TuiButtonModule,
  TuiPaginationModule,
  TuiTableModule,
  TuiLoaderModule,
  TuiLinkModule,
  TuiInputModule,
  TuiTextfieldControllerModule,
  TuiSelectModule,
  TuiCalendarModule,
  TuiDataListModule,
  TuiProgressModule,
  TuiTabsModule,
  TuiFieldErrorPipeModule,
  TuiScrollbarModule,
  TuiCheckboxModule,
} from '@taiga-ui/kit';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GuestListModule } from './components/guest-list/guest-list.module';
import { RoomListModule } from './components/room-list/room-list.module';
import { ReservationListModule } from './components/reservation-list/reservation-list.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { ReservationCalendarModule } from './components/reservation-calendar/reservation-calendar.module';
import { NewReservationDialogModule } from './components/new-reservation-dialog/new-reservation-dialog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    TuiRootModule,
    TuiDialogModule,
    TuiAlertModule,
    TuiButtonModule,
    TuiPaginationModule,
    TuiTableModule,
    TuiLoaderModule,
    TuiLinkModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiSelectModule,
    TuiCalendarModule,
    TuiDataListModule,
    TuiProgressModule,
    TuiTabsModule,
    TuiFieldErrorPipeModule,
    TuiScrollbarModule,
    TuiCheckboxModule,
    GuestListModule,
    RoomListModule,
    ReservationListModule,
    SidebarModule,
    ReservationCalendarModule,
    NewReservationDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

```

---

## File: src\app\components\guest-list\guest-details-dialog\guest-details-dialog.component.html
```
<tui-dialog size="l">
  <tui-dialog-header> Guest Details </tui-dialog-header>

  <tui-dialog-content>
    <div *ngIf="!loading; else loadingTemplate" class="p-4">
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Guest Information</h3>
        <p><strong>ID:</strong> {{ guest.guest_id }}</p>
        <p><strong>Name:</strong> {{ guest.name }}</p>
        <p><strong>Email:</strong> {{ guest.email }}</p>
        <p><strong>Phone Number:</strong> {{ guest.phone_number }}</p>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Past Reservations</h3>
        <p><strong>Total:</strong> {{ guest.totalPastReservations }}</p>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Upcoming Reservations</h3>
        <!-- You can add a table or list of upcoming reservations here -->
      </div>
    </div>
    <ng-template #loadingTemplate>
      <div class="flex justify-center items-center h-32">
        <tui-loader size="l"></tui-loader>
      </div>
    </ng-template>
  </tui-dialog-content>

  <tui-dialog-footer>
    <button tuiButton type="button" size="m" (click)="closeDialog()">Close</button>
  </tui-dialog-footer>
</tui-dialog>

```

---

## File: src\app\components\guest-list\guest-details-dialog\guest-details-dialog.component.scss
```

```

---

## File: src\app\components\guest-list\guest-details-dialog\guest-details-dialog.component.ts
```
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

```

---

## File: src\app\components\guest-list\guest-details-dialog\guest-details-dialog.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GuestDetailsDialogComponent } from './guest-details-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiLoaderModule } from '@taiga-ui/core';

@NgModule({
  declarations: [GuestDetailsDialogComponent],
  imports: [CommonModule, TuiDialogModule, TuiButtonModule, TuiLoaderModule],
  exports: [GuestDetailsDialogComponent],
})
export class GuestDetailsDialogModule {}

```

---

## File: src\app\components\guest-list\guest-list.component.html
```
<div class="p-4">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-2xl font-bold">Guests</h2>
    <button tuiButton type="button" size="m" (click)="onOpenNewGuestDialog()">New Guest +</button>
  </div>
  <tui-table
    *ngIf="!loading; else loadingTemplate"
    [columns]="columns"
    [data]="guests"
    (sorterChange)="onSort($event)"
    class="w-full border-collapse"
  >
    <ng-template tuiTh [tuiThSort]="'id'" let-sort>
      ID
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'name'" let-sort>
      Name
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'email'" let-sort>
      Email
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'phone_number'" let-sort>
      Phone Number
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh> Reservations </ng-template>
    <ng-template let-guest tuiTr>
      <td tuiTd>{{ guest.guest_id }}</td>
      <td tuiTd>{{ guest.name }}</td>
      <td tuiTd>{{ guest.email }}</td>
      <td tuiTd>{{ guest.phone_number }}</td>
      <td tuiTd>
        <button tuiButton type="button" size="s" appearance="secondary" (click)="onOpenDetailsDialog(guest)">
          View
        </button>
      </td>
    </ng-template>
  </tui-table>
  <ng-template #loadingTemplate>
    <div class="flex justify-center items-center h-32">
      <tui-loader size="l"></tui-loader>
    </div>
  </ng-template>
  <tui-pagination
    *ngIf="!loading && total > limit"
    [total]="total"
    [size]="'m'"
    [(page)]="page"
    (pageChange)="onPageChange($event)"
    [maxPages]="5"
    class="mt-4 flex justify-end"
  ></tui-pagination>
</div>

```

---

## File: src\app\components\guest-list\guest-list.component.scss
```

```

---

## File: src\app\components\guest-list\guest-list.component.ts
```
import { Component } from '@angular/core';
import { GuestService } from '../../services/guest.service';
import { Guest } from '../../shared/models/guest.model';
import { TuiTableSortEvent } from @taiga-ui/addon-table;
import { TuiContextWithImplicit } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { NewGuestDialogComponent } from '../guest-list/new-guest-dialog/new-guest-dialog.component';
import { GuestDetailsDialogComponent } from '../guest-list/guest-details-dialog/guest-details-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GuestListComponent {
  loading = true;
  guests: Guest[] = [];
  total = 0;
  page = 1;
  limit = 10;

  readonly columns = ['id', 'name', 'email', 'phone_number', 'reservations'];
  constructor(private guestService: GuestService, private dialogService: TuiDialogService) {
    this.fetchGuests();
  }

  fetchGuests() {
    this.loading = true;
    this.guestService.getAllGuests(this.page, this.limit).subscribe((guests) => {
      this.guests = guests;
      this.loading = false;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchGuests();
  }

  onOpenDetailsDialog(guest: Guest) {
    this.dialogService
      .open(new TuiContextWithImplicit(GuestDetailsDialogComponent, guest), {
        closeable: true,
        size: 'l',
      })
      .subscribe();
  }

  onOpenNewGuestDialog() {
    this.dialogService
      .open(NewGuestDialogComponent, {
        closeable: true,
        size: 'l',
      })
      .subscribe(() => {
        this.fetchGuests();
      });
  }
  onSort(event: TuiTableSortEvent) {
    console.log('sort: ', event);
  }
}

```

---

## File: src\app\components\guest-list\guest-list.module.ts
```
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

```

---

## File: src\app\components\guest-list\new-guest-dialog\new-guest-dialog.component.html
```
<tui-dialog size="l">
  <tui-dialog-header> New Guest </tui-dialog-header>

  <tui-dialog-content>
    <form [formGroup]="guestForm" (ngSubmit)="submitForm()">
      <tui-input formControlName="name" tuiTextfieldControllerSize="m" class="mb-4">
        Name
        <input tuiTextfield />
      </tui-input>
      <tui-input formControlName="email" tuiTextfieldControllerSize="m" class="mb-4">
        Email
        <input tuiTextfield type="email" />
      </tui-input>
      <tui-input formControlName="phone_number" tuiTextfieldControllerSize="m" class="mb-4">
        Phone Number
        <input tuiTextfield type="tel" />
      </tui-input>
      <div class="flex justify-end mt-4">
        <button tuiButton type="button" size="m" appearance="secondary" (click)="closeDialog()" class="mr-2">
          Cancel
        </button>
        <button tuiButton type="submit" size="m" appearance="primary">Save</button>
      </div>
    </form>
  </tui-dialog-content>
</tui-dialog>

```

---

## File: src\app\components\guest-list\new-guest-dialog\new-guest-dialog.component.scss
```

```

---

## File: src\app\components\guest-list\new-guest-dialog\new-guest-dialog.component.ts
```
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

```

---

## File: src\app\components\guest-list\new-guest-dialog\new-guest-dialog.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGuestDialogComponent } from './new-guest-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewGuestDialogComponent],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
  ],
  exports: [NewGuestDialogComponent],
})
export class NewGuestDialogModule {}

```

---

## File: src\app\components\new-reservation-dialog\new-reservation-dialog.component.html
```
<tui-dialog size="l">
  <tui-dialog-header> New Reservation </tui-dialog-header>

  <tui-dialog-content>
    <form [formGroup]="reservationForm" (ngSubmit)="submitForm()">
      <tui-select formControlName="guest_id" tuiTextfieldControllerSize="m" class="mb-4" [tuiTextfieldCleaner]="true">
        Select Guest
        <tui-data-list *tuiDataList>
          <button *ngFor="let guest of guests" tuiOption [value]="guest.guest_id">
            {{ guest.name }}
          </button>
        </tui-data-list>
      </tui-select>

      <tui-select formControlName="room_id" tuiTextfieldControllerSize="m" class="mb-4" [tuiTextfieldCleaner]="true">
        Select Room
        <tui-data-list *tuiDataList>
          <button *ngFor="let room of rooms" tuiOption [value]="room.room_id">
            {{ room.room_number }} - {{ room.room_name }}
          </button>
        </tui-data-list>
      </tui-select>
      <tui-input formControlName="check_in_date" tuiTextfieldControllerSize="m" class="mb-4">
        Check In
        <input tuiTextfield type="date" [tuiTextfieldMin]="min" />
      </tui-input>
      <tui-input formControlName="check_out_date" tuiTextfieldControllerSize="m" class="mb-4">
        Check Out
        <input tuiTextfield type="date" [tuiTextfieldMin]="min" />
      </tui-input>

      <div class="flex justify-end mt-4">
        <button tuiButton type="button" size="m" appearance="secondary" (click)="closeDialog()" class="mr-2">
          Cancel
        </button>
        <button tuiButton type="submit" size="m" appearance="primary">Save</button>
      </div>
    </form>
  </tui-dialog-content>
</tui-dialog>

```

---

## File: src\app\components\new-reservation-dialog\new-reservation-dialog.component.scss
```

```

---

## File: src\app\components\new-reservation-dialog\new-reservation-dialog.component.ts
```
import { Component, Inject } from '@angular/core';
import { TuiDialogContext } from '@taiga-ui/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReservationService } from '../../services/reservation.service';
import { GuestService } from '../../services/guest.service';
import { RoomService } from '../../services/room.service';

@Component({
  selector: 'app-new-reservation-dialog',
  templateUrl: './new-reservation-dialog.component.html',
  styleUrls: ['./new-reservation-dialog.component.scss'],
})
export class NewReservationDialogComponent {
  reservationForm: FormGroup;
  rooms: any[] = [];
  guests: any[] = [];
  min = new Date();

  constructor(
    @Inject(TuiDialogContext) private readonly context: TuiDialogContext<any>,
    private reservationService: ReservationService,
    private formBuilder: FormBuilder,
    private guestService: GuestService,
    private roomService: RoomService,
  ) {
    this.reservationForm = this.formBuilder.group({
      guest_id: ['', Validators.required],
      room_id: ['', Validators.required],
      check_in_date: ['', Validators.required],
      check_out_date: ['', Validators.required],
    });

    this.guestService.getAllGuests().subscribe((guests: any[]) => {
      this.guests = guests;
    });
    this.roomService.getAllRooms().subscribe((rooms: any[]) => {
      this.rooms = rooms;
    });
  }

  submitForm() {
    if (this.reservationForm.valid) {
      this.reservationService.createReservation(this.reservationForm.value).subscribe(() => {
        this.context.completeWith(null);
      });
    }
  }

  closeDialog(): void {
    this.context.completeWith(null);
  }
}

```

---

## File: src\app\components\new-reservation-dialog\new-reservation-dialog.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewReservationDialogComponent } from './new-reservation-dialog.component';
import { TuiDialogModule } from '@taiga-ui/core';
import { TuiButtonModule } from '@taiga-ui/kit';
import { TuiInputModule } from '@taiga-ui/kit';
import { TuiTextfieldControllerModule } from '@taiga-ui/kit';
import { TuiDataListModule } from '@taiga-ui/kit';
import { TuiSelectModule } from '@taiga-ui/kit';
import { TuiCalendarModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewReservationDialogComponent],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
    TuiDataListModule,
    TuiSelectModule,
    TuiCalendarModule,
  ],
  exports: [NewReservationDialogComponent],
})
export class NewReservationDialogModule {}

```

---

## File: src\app\components\progress-circle\progress-circle.component.html
```
<tui-progress [value]="value" [size]="size" [showProgress]="false">{{ label }}</tui-progress>

```

---

## File: src\app\components\progress-circle\progress-circle.component.scss
```

```

---

## File: src\app\components\progress-circle\progress-circle.component.ts
```
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

```

---

## File: src\app\components\progress-circle\progress-circle.module.ts
```
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

```

---

## File: src\app\components\reservation-calendar\reservation-calendar.component.html
```
<div class="p-4">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-2xl font-bold">Reservations Calendar</h2>
    <a tuiButton routerLink="/reservations" type="button" size="m">List View</a>
  </div>
  <tui-calendar
    *ngIf="!loading; else loadingTemplate"
    [(ngModel)]="month"
    (ngModelChange)="onMonthChange($event)"
    [day]="month"
  >
    <ng-template let-day>
      <div class="flex flex-col items-center">
        <span class="text-sm">{{ day.day }}</span>
        <tui-progress [value]="getProgress(day)" size="xs" [showProgress]="false" class="w-8 text-xs">{{
          getDayContent(day)
        }}</tui-progress>
      </div>
    </ng-template>
  </tui-calendar>
  <ng-template #loadingTemplate>
    <div class="flex justify-center items-center h-32">
      <tui-loader size="l"></tui-loader>
    </div>
  </ng-template>
</div>

```

---

## File: src\app\components\reservation-calendar\reservation-calendar.component.scss
```

```

---

## File: src\app\components\reservation-calendar\reservation-calendar.component.ts
```
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

```

---

## File: src\app\components\reservation-calendar\reservation-calendar.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationCalendarComponent } from './reservation-calendar.component';
import { TuiCalendarModule, TuiLoaderModule, TuiProgressModule } from '@taiga-ui/kit';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReservationCalendarComponent],
  imports: [CommonModule, TuiCalendarModule, FormsModule, TuiLoaderModule, TuiProgressModule, RouterModule],
  exports: [ReservationCalendarComponent],
})
export class ReservationCalendarModule {}

```

---

## File: src\app\components\reservation-list\reservation-list.component.html
```
<div class="p-4">
  <div class="flex justify-between items-center mb-4">
    <h2 class="text-2xl font-bold">Reservations</h2>
    <a tuiButton routerLink="/reservations/calendar" type="button" size="m">Calendar View</a>
  </div>
  <tui-table
    *ngIf="!loading; else loadingTemplate"
    [columns]="columns"
    [data]="reservations"
    (sorterChange)="onSort($event)"
    class="w-full border-collapse"
  >
    <ng-template tuiTh [tuiThSort]="'room_id'" let-sort>
      Room ID
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'guest_id'" let-sort>
      Guest ID
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'check_in_date'" let-sort>
      Check In
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'check_out_date'" let-sort>
      Check Out
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'status'" let-sort>
      Status
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh> Action </ng-template>

    <ng-template let-reservation tuiTr>
      <td tuiTd>{{ reservation.room_id }}</td>
      <td tuiTd>{{ reservation.guest_id }}</td>
      <td tuiTd>{{ reservation.check_in_date | date : 'yyyy/MM/dd' }}</td>
      <td tuiTd>{{ reservation.check_out_date | date : 'yyyy/MM/dd' }}</td>
      <td tuiTd>{{ reservation.status }}</td>
      <td tuiTd>
        <button
          *ngIf="reservation.status !== 'canceled'"
          tuiButton
          type="button"
          size="s"
          appearance="secondary"
          (click)="cancelReservation(reservation)"
        >
          Cancel
        </button>
      </td>
    </ng-template>
  </tui-table>
  <ng-template #loadingTemplate>
    <div class="flex justify-center items-center h-32">
      <tui-loader size="l"></tui-loader>
    </div>
  </ng-template>
  <tui-pagination
    *ngIf="!loading && total > limit"
    [total]="total"
    [size]="'m'"
    [(page)]="page"
    (pageChange)="onPageChange($event)"
    [maxPages]="5"
    class="mt-4 flex justify-end"
  ></tui-pagination>
</div>

```

---

## File: src\app\components\reservation-list\reservation-list.component.scss
```

```

---

## File: src\app\components\reservation-list\reservation-list.component.ts
```
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

```

---

## File: src\app\components\reservation-list\reservation-list.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list.component';
import { TuiTableModule, TuiPaginationModule, TuiButtonModule, TuiLoaderModule } from '@taiga-ui/kit';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ReservationListComponent],
  imports: [CommonModule, TuiTableModule, TuiPaginationModule, TuiButtonModule, TuiLoaderModule, RouterModule],
  exports: [ReservationListComponent],
})
export class ReservationListModule {}

```

---

## File: src\app\components\room-list\room-details-dialog\room-details-dialog.component.html
```
<tui-dialog size="l">
  <tui-dialog-header> Room Details </tui-dialog-header>

  <tui-dialog-content>
    <div *ngIf="!loading; else loadingTemplate" class="p-4">
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Room Information</h3>
        <p><strong>Room Number:</strong> {{ room.room_number }}</p>
        <p><strong>Room Name:</strong> {{ room.room_name }}</p>
      </div>
      <div class="mb-4">
        <h3 class="text-lg font-semibold">Upcoming Reservations</h3>
        <tui-table
          *ngIf="room.reservations && room.reservations.length > 0"
          [columns]="['check_in_date', 'check_out_date', 'guest_id']"
          [data]="room.reservations"
          class="w-full border-collapse"
        >
          <ng-template tuiTh> Check In </ng-template>
          <ng-template tuiTh> Check Out </ng-template>
          <ng-template tuiTh> Guest ID </ng-template>
          <ng-template let-reservation tuiTr>
            <td tuiTd>{{ reservation.check_in_date | date : 'yyyy/MM/dd' }}</td>
            <td tuiTd>{{ reservation.check_out_date | date : 'yyyy/MM/dd' }}</td>
            <td tuiTd>{{ reservation.guest_id }}</td>
          </ng-template>
        </tui-table>
        <p *ngIf="!room.reservations || room.reservations.length === 0">No upcoming reservations for this room.</p>
      </div>
    </div>
    <ng-template #loadingTemplate>
      <div class="flex justify-center items-center h-32">
        <tui-loader size="l"></tui-loader>
      </div>
    </ng-template>
  </tui-dialog-content>

  <tui-dialog-footer>
    <button tuiButton type="button" size="m" (click)="closeDialog()">Close</button>
  </tui-dialog-footer>
</tui-dialog>

```

---

## File: src\app\components\room-list\room-details-dialog\room-details-dialog.component.scss
```

```

---

## File: src\app\components\room-list\room-details-dialog\room-details-dialog.component.ts
```
import { Component } from '@angular/core';
import { RoomService } from '../../../services/room.service';
import { Room } from '../../../shared/models/room.model';
import { TuiTableSortEvent } from '@taiga-ui/cdk';
import { TuiContextWithImplicit } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { RoomDetailsDialogComponent } from '../room-details-dialog/room-details-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent {
  loading = true;
  rooms: Room[] = [];
  total = 0;
  page = 1;
  limit = 10;

  readonly columns = ['room_number', 'room_name', 'status', 'reservations'];
  constructor(private roomService: RoomService, private dialogService: TuiDialogService) {
    this.fetchRooms();
  }

  fetchRooms() {
    this.loading = true;
    this.roomService.getAllRooms(this.page, this.limit).subscribe((rooms) => {
      this.rooms = rooms;
      this.loading = false;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchRooms();
  }

  onOpenDetailsDialog(room: Room) {
    this.dialogService
      .open(new TuiContextWithImplicit(RoomDetailsDialogComponent, room), {
        closeable: true,
        size: 'l',
      })
      .subscribe();
  }
  onSort(event: TuiTableSortEvent) {
    console.log('sort: ', event);
  }
}

```

---

## File: src\app\components\room-list\room-details-dialog\room-details-dialog.module.ts
```
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

```

---

## File: src\app\components\room-list\room-list.component.html
```
<div class="p-4">
  <h2 class="text-2xl font-bold mb-4">Rooms</h2>
  <tui-table
    *ngIf="!loading; else loadingTemplate"
    [columns]="columns"
    [data]="rooms"
    (sorterChange)="onSort($event)"
    class="w-full border-collapse"
  >
    <ng-template tuiTh [tuiThSort]="'room_number'" let-sort>
      Room Number
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh [tuiThSort]="'room_name'" let-sort>
      Room Name
      <tui-table-sort-label [sort]="sort"></tui-table-sort-label>
    </ng-template>
    <ng-template tuiTh> Status </ng-template>
    <ng-template tuiTh> Reservations </ng-template>

    <ng-template let-room tuiTr>
      <td tuiTd>{{ room.room_number }}</td>
      <td tuiTd>{{ room.room_name }}</td>
      <td tuiTd>
        <!-- Add logic to display the occupancy status -->
      </td>
      <td tuiTd>
        <button tuiButton type="button" size="s" appearance="secondary" (click)="onOpenDetailsDialog(room)">
          Open Reservations
        </button>
      </td>
    </ng-template>
  </tui-table>
  <ng-template #loadingTemplate>
    <div class="flex justify-center items-center h-32">
      <tui-loader size="l"></tui-loader>
    </div>
  </ng-template>
  <tui-pagination
    *ngIf="!loading && total > limit"
    [total]="total"
    [size]="'m'"
    [(page)]="page"
    (pageChange)="onPageChange($event)"
    [maxPages]="5"
    class="mt-4 flex justify-end"
  ></tui-pagination>
</div>

```

---

## File: src\app\components\room-list\room-list.component.scss
```

```

---

## File: src\app\components\room-list\room-list.component.ts
```
import { Component } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../shared/models/room.model';
import { TuiTableSortEvent } from '@taiga-ui/addon-table';
import { TuiContextWithImplicit } from '@taiga-ui/cdk';
import { TuiDialogService } from '@taiga-ui/core';
import { RoomDetailsDialogComponent } from './room-details-dialog/room-details-dialog.component';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomListComponent {
  loading = true;
  rooms: Room[] = [];
  total = 0;
  page = 1;
  limit = 10;

  readonly columns = ['room_number', 'room_name', 'status', 'reservations'];
  constructor(private roomService: RoomService, private dialogService: TuiDialogService) {
    this.fetchRooms();
  }

  fetchRooms() {
    this.loading = true;
    this.roomService.getAllRooms(this.page, this.limit).subscribe((rooms) => {
      this.rooms = rooms;
      this.loading = false;
    });
  }

  onPageChange(page: number) {
    this.page = page;
    this.fetchRooms();
  }

  onOpenDetailsDialog(room: Room) {
    this.dialogService
      .open(new TuiContextWithImplicit(RoomDetailsDialogComponent, room), {
        closeable: true,
        size: 'l',
      })
      .subscribe();
  }
  onSort(event: TuiTableSortEvent) {
    console.log('sort: ', event);
  }
}

```

---

## File: src\app\components\room-list\room-list.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewGuestDialogComponent } from './new-guest-dialog.component';
import { TuiDialogModule, TuiButtonModule, TuiInputModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewGuestDialogComponent],
  imports: [
    CommonModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    ReactiveFormsModule,
  ],
  exports: [NewGuestDialogComponent],
})
export class NewGuestDialogModule {}

```

---

## File: src\app\components\sidebar\sidebar.component.html
```
<aside class="bg-gray-800 text-white h-full">
  <div class="p-4">
    <h1 class="text-2xl font-bold mb-8">Hotel Reservations System</h1>
    <nav>
      <div *ngFor="let item of navItems" class="mb-2">
        <a
          tuiLink
          [routerLink]="item.path"
          routerLinkActive="tui-link_active"
          class="block py-2 px-4 rounded hover:bg-gray-700"
          >{{ item.label }}</a
        >
      </div>
    </nav>
  </div>
</aside>

```

---

## File: src\app\components\sidebar\sidebar.component.scss
```

```

---

## File: src\app\components\sidebar\sidebar.component.ts
```
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  navItems = [
    { label: 'Guests', path: '/guests' },
    { label: 'Rooms', path: '/rooms' },
    { label: 'Reservations', path: '/reservations' },
  ];
}

```

---

## File: src\app\components\sidebar\sidebar.module.ts
```
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { TuiLinkModule } from '@taiga-ui/core';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, RouterModule, TuiLinkModule],
  exports: [SidebarComponent],
})
export class SidebarModule {}

```

---

## File: src\app\services\guest.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Guest } from '../shared/models/guest.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GuestService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getAllGuests(page: number, limit: number): Observable<Guest[]> {
    return this.http.get<Guest[]>(`${this.apiUrl}/guests?page=${page}&limit=${limit}`);
  }

  getGuestById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/guests/${id}`);
  }

  createGuest(guestData: any): Observable<Guest> {
    return this.http.post<Guest>(`${this.apiUrl}/guests`, guestData);
  }
}

```

---

## File: src\app\services\reservation.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from '../shared/models/reservation.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllReservations(page: number, limit: number): Observable<Reservation[]> {
    return this.http.get<Reservation[]>(`${this.apiUrl}/reservations?page=${page}&limit=${limit}`);
  }

  cancelReservation(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/reservations/${id}`);
  }

  createReservation(reservationData: any): Observable<Reservation> {
    return this.http.post<Reservation>(`${this.apiUrl}/reservations`, reservationData);
  }

  getReservationsByMonth(year: number, month: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/reservations/calendar?year=${year}&month=${month}`);
  }
}

```

---

## File: src\app\services\room.service.ts
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../shared/models/room.model';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllRooms(page: number, limit: number): Observable<Room[]> {
    return this.http.get<Room[]>(`${this.apiUrl}/rooms?page=${page}&limit=${limit}`);
  }

  getRoomById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/rooms/${id}`);
  }
}

```

---

## File: src\app\shared\components\progress-circle\progress-circle.component.html
```

```

---

## File: src\app\shared\components\progress-circle\progress-circle.component.scss
```

```

---

## File: src\app\shared\components\progress-circle\progress-circle.component.ts
```

```

---

## File: src\app\shared\components\progress-circle\progress-circle.module.ts
```

```

---

## File: src\app\shared\constants\constants.ts
```
export const API_URL = 'http://localhost:3000/api';

```

---

## File: src\app\shared\models\guest.model.ts
```
export interface Guest {
  guest_id: number;
  name: string;
  email: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  totalPastReservations?: number;
}

```

---

## File: src\app\shared\models\reservation.model.ts
```
export interface Reservation {
  reservation_id: number;
  guest_id: number;
  room_id: number;
  check_in_date: string;
  check_out_date: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

```

---

## File: src\app\shared\models\room.model.ts
```
export interface Room {
  room_id: number;
  room_number: string;
  room_name: string;
  created_at: Date;
  updated_at: Date;
  reservations?: any[];
}

```

---

## File: src\environments\environment.prod.ts
```
export const environment = {
  production: true,
  apiUrl: 'https://your-production-api.com/api',
};

```

---

## File: src\environments\environment.ts
```
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
};

```

---

## File: src\index.html
```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>HotelReservationApp</title>
    <base href="/" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" type="image/x-icon" href="favicon.ico" />
    <link id="theme-link" href="assets/styles/taiga/tui-theme.css" rel="stylesheet" />
    <link id="tui-icons" href="assets/styles/taiga/tui-icons.css" rel="stylesheet" />
  </head>
  <body>
    <app-root></app-root>
  </body>
</html>

```

---

## File: src\main.ts
```
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import '@angular/localize/init';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));

```

---

## File: src\polyfills.ts
```
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 */

import 'zone.js'; // Included with Angular CLI.

```

---

## File: src\styles.scss
```
@import '@taiga-ui/core/styles/taiga-ui-local.scss';
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  background-color: #e5e7eb; /* Equivalent to bg-gray-200 */
}

```

---

## File: src\test.ts
```
// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

declare const require: {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
  ): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

```

---

## File: src\tsconfig.json
```
{
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "es2020",
    "module": "es2020",
    "lib": ["es2020", "dom"],
    "useDefineForClassFields": false
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
}

```

---

