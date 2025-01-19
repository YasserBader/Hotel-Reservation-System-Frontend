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
