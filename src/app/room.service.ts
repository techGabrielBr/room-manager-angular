import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './model/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private url = "http://localhost:8082/rooms";

  constructor(private htpp:HttpClient) { }

  getRoom(id:number): Observable<Room>{
    return this.htpp.get<Room>(`${this.url}/${id}`);
  }

  createRoom(room:Room): Observable<Room>{
    return this.htpp.post<Room>(this.url, room);
  }

  updateRoom(id:number, value:any): Observable<Room> {
    return this.htpp.put<Room>(`${this.url}/${id}`, value);
  }

  deleteRoom(id: number): Observable<void> {
    return this.htpp.delete<void>(`${this.url}/${id}`);
  }

  getList(): Observable<Room[]> {
    return this.htpp.get<Room[]>(this.url);
  }

}
