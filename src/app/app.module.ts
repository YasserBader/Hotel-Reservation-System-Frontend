import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TaigaModule } from './shared/modules/taiga.module';
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
