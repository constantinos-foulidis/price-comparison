import { Component, OnInit, Input, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  showCritics = false;
  critics = [
    {
    rating: 7,
    critics: "this movies is the worst i ever seen"
    },
    {
      rating: 4,
      critics: "The actors are ipotonic the script taking water from everywhere and the main character plays without passion Waste of time"

    },
    {
      rating: 7,
      critics: "this movies is the worst i ever seen"
      },
      {
        rating: 4,
        critics: "The actors are ipotonic the script taking water from everywhere and the main character plays without passion Waste of time"

      },
      {
        rating: 7,
        critics: "this movies is the worst i ever seen"
        },
        {
          rating: 4,
          critics: "The actors are ipotonic the script taking water from everywhere and the main character plays without passion Waste of timeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"

        }
]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }
  showReviews(){

  }
}
