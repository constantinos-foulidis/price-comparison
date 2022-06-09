import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.scss']
})
export class VotesComponent implements OnInit {

  constructor(private coerService:CoreService) { }
  data:any = [];
  movies:any = []
  ngOnInit(): void {
    this.coerService.getMovies().subscribe(data => {
      this.movies = data;
      data.forEach((element:any,index:any) => {

          element.value = Math.round(element.Rating/element.Votes);

         element.name = element.Title;


         this.data.push({
           name: element.name,
           value: element.value,
         })
      });

     console.log(this.data);
     })
  }



}
