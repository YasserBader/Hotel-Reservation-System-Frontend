import { Component } from '@angular/core';
import { Room } from '../../../shared/models/room.model';
import { RoomService } from '../../../services/room.service';
import { DialogService } from '../../../services/dialog.service';

@Component({
  selector: 'app-room-details-dialog',
  templateUrl: './room-details-dialog.component.html',
  styleUrls: ['./room-details-dialog.component.scss'],
})
export class RoomDetailsDialogComponent {
  room!: Room;
  loading = true;

  constructor(private roomService: RoomService, private dialogService: DialogService) {
    this.fetchRoom();
  }

  fetchRoom() {
    this.loading = true;
    this.roomService.getRoomById(this.room.room_id).subscribe((room) => {
      this.room = room;
      this.loading = false;
    });
  }

  closeDialog(): void {
    this.dialogService.open(null);
  }
}
