import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-searchcategory',
  templateUrl: './searchcategory.component.html',
  styleUrls: ['./searchcategory.component.scss']
})
export class SearchcategoryComponent implements OnInit {
  panelOpenState = false;
  @Output() clicked = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
