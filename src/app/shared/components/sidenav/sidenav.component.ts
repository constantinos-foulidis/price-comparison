import { Component, OnInit, Input, ElementRef, Output,EventEmitter, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @ViewChild('drawer', { static: true }) public drawer!: any;

  @Input() showFilter: boolean = false;

  constructor() {

   }

  ngOnInit(): void {

  }

}
