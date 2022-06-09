import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CoreService } from 'src/app/service/core.service';


@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {
  rating3: number;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private coreService: CoreService) {
    this.rating3 = 0;
  }

  ngOnInit(): void {
  }
  save(){
    let data = this.data;
        data.Rating = this.rating3
    this.coreService.updateProducts(data).subscribe(test => {
      console.log(test);
    })
  }
}
