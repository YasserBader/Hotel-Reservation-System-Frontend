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
