import { Component, OnInit, Input, Inject, ViewChild } from '@angular/core';
import {VgApiService,VgControlsHiddenService} from '@videogular/ngx-videogular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  subscriptions: Subscription[] = [];
  src: string = '/assets/video/sample-mp4-file.mp4';
  api1: VgApiService | undefined;
  api2: VgControlsHiddenService | undefined;
  hidden: any ;
  constructor(private api: VgApiService,@Inject(MAT_DIALOG_DATA) public data: any,private controlsHidden:VgControlsHiddenService) {
    // this.api1 = api;
    // this.api2 = vgControlsHiddenService;
  }
  ngOnInit(): void {

  }


}
