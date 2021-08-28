import { Router } from '@angular/router';
import { RoomService } from './../room.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  rooms!: Observable<Room[]>;

  constructor(private roomService:RoomService,
    private router:Router) { }

  ngOnInit() {
    this.reloadDate();
  }

  reloadDate(){
    this.rooms = this.roomService.getList();
  }

  deleteRoom(id:number){
    this.roomService.deleteRoom(id)
    .subscribe(
      (data: any) => {
        console.log(data)
        this.reloadDate();
      },
      (error: any) => console.log(error)
    );
  }

  roomDetails(id:number){
    this.router.navigate(['details', id]);
  }

  updateRoom(id:number){
    this.router.navigate(['update', id]);
  }

}
