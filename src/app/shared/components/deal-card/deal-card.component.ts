import { outputAst } from '@angular/compiler';
import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { CoreService } from 'src/app/service/core.service';
import { SeessionStorageService } from 'src/app/service/seession-storage.service';


@Component({
  selector: 'app-deal-card',
  templateUrl: './deal-card.component.html',
  styleUrls: ['./deal-card.component.scss']
})
export class DealCardComponent implements OnInit {
   @Input() data:any
   @Output() clicked = new EventEmitter<MouseEvent>();
   @Output() reviewClicked = new EventEmitter<MouseEvent>();

  constructor(private coreService: CoreService,private sStorage: SeessionStorageService) { }

  ngOnInit(): void {
  }
  updateMovies(){
    let favor:any = [];
    if(this.sStorage.getItem('favorites') == 'undefined' ){
      favor = [];
    }else{
      favor =  this.sStorage.getItem('favorites')?.split(',');
    }

    favor.push(this.data._id);

    let data = {
      username: this.sStorage.getItem('username'),
      email: this.sStorage.getItem('email'),
      password: this.sStorage.getItem('password'),
      favorites: favor
    }
    this.coreService.updateMovies(data).subscribe(test =>{
         if(test.complete){
            this.data.liked = true;
            this.sStorage.removeItem('favorites');
            this.sStorage.setItem('favorites',test.user.favorites);
         }
    });
  }
  removeMovies(){
    let favor:any = []
    favor = this.sStorage.getItem('favorites')?.split(',');

    favor = favor.filter((value:any) => value !== this.data._id);
    let data = {
      username: this.sStorage.getItem('username'),
      email: this.sStorage.getItem('email'),
      password: this.sStorage.getItem('password'),
      favorites: favor
    }
    this.coreService.updateMovies(data).subscribe(test => {
      if(test.complete){
        this.data.liked = false;
        this.sStorage.setItem('favorites',test.user.favorites);
     }
    })
  }
  openReview(){

  }
}
