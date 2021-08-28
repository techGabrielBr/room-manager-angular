import { Router, ActivatedRoute } from '@angular/router';
import { RoomService } from './../room.service';
import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room';

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {

  id!: number;
  room!: Room;
  submitted:boolean = false;

  constructor(private roomService:RoomService,
    private router:Router,
    private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.room = new Room();

    this.id = this.activeRoute.snapshot.params["id"];

    this.roomService.getRoom(this.id)
    .subscribe(
      (data:any) => {
        console.log(data)
        this.room = data;
      },
      (error:any) => console.log(error)
      );

  }

  updateRoom() {
    this.roomService.updateRoom(this.id, this.room)
      .subscribe(
        (data: any) => console.log(data),
        (error: any) => console.log(error)
      );
    this.room = new Room();
    this.goToList();
  }

  onSubmit() {
    this.updateRoom();
  }

  goToList(){
    this.router.navigateByUrl("/rooms");
  }


}
