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
