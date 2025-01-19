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
