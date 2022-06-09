import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';
import { SeessionStorageService } from 'src/app/service/seession-storage.service';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  //@ViewChild('TEST', { static: true }) public drawer!: any | undefined;
  showFilter: boolean = false;

  constructor(private sStorage:SeessionStorageService) { }

  ngOnInit(): void {
  }
  openSideNav(){
    // this.showFilter = !this.showFilter;
    // this.drawer?.drawer?.toggle();
  }
  hasUserRights(): boolean{
     return this.sStorage.getItem('status') === 'true' ? true : false;
  }
  logOut(){
    this.sStorage.removeItem('status');
  }
}
