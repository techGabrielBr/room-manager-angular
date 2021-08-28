import { RoomService } from './../room.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Room } from '../model/room';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  room!: Room;
  id!: number;

  constructor(private roomService:RoomService,
    private activeRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.room = new Room();
    this.id = this.activeRoute.snapshot.params["id"];

    this.roomService.getRoom(this.id)
      .subscribe(
        (data: any) => {
          console.log(data)
          this.room = data;
        },
        (error: any) => console.log(error)
      );
  }

  list(){
    this.router.navigateByUrl("/rooms");
  }

}
