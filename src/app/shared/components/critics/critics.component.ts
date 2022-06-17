import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-critics',
  templateUrl: './critics.component.html',
  styleUrls: ['./critics.component.scss']
})
export class CriticsComponent implements OnInit {
  @Input() data:any;
  constructor() { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
