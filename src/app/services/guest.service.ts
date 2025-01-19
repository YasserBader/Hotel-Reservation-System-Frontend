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
