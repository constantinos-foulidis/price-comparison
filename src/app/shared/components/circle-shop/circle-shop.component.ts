import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-circle-shop',
  templateUrl: './circle-shop.component.html',
  styleUrls: ['./circle-shop.component.scss']
})
export class CircleShopComponent implements OnInit {
  @Input() src: string = '';
  @Input() alt: string = '';
  @Output() clicked: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

  constructor() { }

  ngOnInit(): void {
  }

}
