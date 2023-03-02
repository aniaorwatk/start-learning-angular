import { Component } from '@angular/core';
import { IRoomListType, IRoomType } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  hotelName = "My Hotel";
  numberOfRooms = "10";
  hidenRooms = false;

  rooms: IRoomType = {
    availableRooms: 10,
    bookedRooms: 5,
    totalRooms: 20
  }

  roomList: IRoomListType[] = [
    {
      roomNumber: 1,
      roomType: 'Delux room',
      amentites: 'Free wi-fi, tv, bathroom, kitchen',
      proce: 500,
      photos: 'https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      checkingTime: new Date("12-Nov-2023"),
      checkoutTime: new Date("14-Nov-2023")
    },
    {
      roomNumber: 2,
      roomType: 'Max room',
      amentites: 'Free wi-fi, tv, bathroom, kitchen,livingroom',
      proce: 600,
      photos: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      checkingTime: new Date("12-Nov-2023"),
      checkoutTime: new Date("15-Nov-2023")
    },
    {
      roomNumber: 3,
      roomType: 'Small room',
      amentites: 'Free wi-fi, tv, bathroom',
      proce: 300,
      photos: 'https://plus.unsplash.com/premium_photo-1667764479102-65129f45f21c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1014&q=80',
      checkingTime: new Date("12-Nov-2023"),
      checkoutTime: new Date("15-Nov-2023")
    },
  ]

  toggle() {
    this.hidenRooms = !this.hidenRooms
  }
}
