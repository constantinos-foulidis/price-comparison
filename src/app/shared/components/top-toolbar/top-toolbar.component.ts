import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav/drawer';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {
  //@ViewChild('TEST', { static: true }) public drawer!: any | undefined;
  showFilter: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  openSideNav(){
    // this.showFilter = !this.showFilter;
    // console.log(this.drawer);
    // this.drawer?.drawer?.toggle();
  }
}
