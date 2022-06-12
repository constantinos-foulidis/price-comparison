import { Component, OnInit } from '@angular/core';
 import Pusher from 'pusher-js';
import {HttpClient} from "@angular/common/http";
import { SeessionStorageService } from 'src/app/service/seession-storage.service';
@Component({
  selector: 'app-livechat',
  templateUrl: './livechat.component.html',
  styleUrls: ['./livechat.component.scss']
})
export class LivechatComponent implements OnInit {

  username = 'username';
  showName = '';
  message = '';
  messages = [];

  constructor(private http: HttpClient,private sStorage:SeessionStorageService) {
  }

  ngOnInit(): void {
    this.username = this.sStorage.getItem('username');
    Pusher.logToConsole = true;


    var pusher = new Pusher('eb7e403f9191fb55db68', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('my-channel');
    channel.bind('my-event', data => {

      this.messages.push(data);


    });
  }

  submit(): void {
    this.http.post('http://localhost:4040/api/sellers', {
      username: this.username,
      message: this.message
    }).subscribe(() => this.message = '');
  }
   changes(event) {
    const element = event.currentTarget as HTMLInputElement
    const value = element.value
    this.message = value;
    console.log(this.message)
   }
}
