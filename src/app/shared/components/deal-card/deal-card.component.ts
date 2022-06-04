import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
   @Input() data:any
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }

}
