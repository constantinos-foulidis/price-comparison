import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/service/core.service';
import { SeessionStorageService } from 'src/app/service/seession-storage.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/components/message-dialog/message-dialog.component';
import { PlayerComponent } from 'src/app/shared/components/player/player.component';
import { ReviewComponent } from 'src/app/shared/components/review/review.component';
import { InfoComponent } from 'src/app/shared/components/info/info.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: any = [];
  allmovies: any = [];
  data:any = [
    { id:1,
      src:'/assets/img/lidl.png',
      alt:'lidl',
    },
    { id:2,
      src:'/assets/img/marinopoulos.png',
      alt:'marinopoulos',
    },
    { id:3,
      src:'/assets/img/masouths.png',
      alt:'masouths',
    },
    { id:4,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:5,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:6,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:7,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:8,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:9,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:10,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:11,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
];
  constructor(private coreSercive: CoreService,private sStorage: SeessionStorageService, public dialog: MatDialog) { }

  ngOnInit(): void {
     this.coreSercive.getMovies().subscribe(data => {
      let test = this.sStorage.getItem('favorites')?.split(',');
       if(test){

        test.map((key:any) => {
              data.forEach((data:any) => {
               if(data._id == key){
                 data.liked = true;
                  return;
               }
              });
            })
          this.movies = data;
          this.allmovies = data;
       }else{
        this.movies = data;
        this.allmovies = data;
       }
     })
  }


  open(data:any){

    if(this.sStorage.getItem('status') === 'true') {

     this.dialog.open(PlayerComponent, {
       data: data,
       maxWidth: '100%',
       maxHeight: '100%',
       height: '100%',
       width: '100%',
       panelClass: ['full-screen-modal', 'mat-dialog-container'],
       hasBackdrop:true,

     });
    }else{
     this.dialog.open(MessageDialogComponent, {
       data: {
         title: 'Info message',
         message: 'In Order to watch video you have to Sign in',
       },
       panelClass: [],
     });
    }
 }

 openReview(data:any){
   if(this.sStorage.getItem('status') === 'true') {
      console.log(data);
     this.dialog.open(ReviewComponent, {
       data: data,
       maxWidth: '50vw',
       maxHeight: '40vh',
       height: '50%',
       width: '50%',

     });
    }else{
     this.dialog.open(MessageDialogComponent, {
       data: {
         title: 'Info message',
         message: 'In Order to watch video you have to Sign in',
       },
       panelClass: [],
     });
    }
 }

 searchBooks(search:any){

  const value = (search.target as HTMLInputElement).value;
  console.log(value);
  if (this.allmovies.length > 0){
    const temp =  this.allmovies.filter(movies => (movies.Title.toLowerCase().includes(value.toLowerCase()) ||
                                                    movies.Actors.toLowerCase().includes(value.toLocaleLowerCase())));

      this.movies = temp;
  }

 }
 filterByCategory(category:any){
  console.log(category);
  console.log(this.allmovies);

  if (this.allmovies.length > 0){
    const temp =  this.allmovies.filter(item =>{
          return item.Genre.find(genre => genre.toLowerCase().includes(category.toLowerCase()))

    });

      this.movies = temp;
      console.log(this.movies.length)
  }
 }
 fillMovies(){
   this.movies = this.allmovies;
 }
 openInfo(data:any){
  console.log(data);
  if(this.sStorage.getItem('status') === 'true') {
    console.log(data);
   this.dialog.open(InfoComponent, {
     data: data,
     maxWidth: '70%',
     maxHeight: '100%',
     height: '100%',
     width: '100%',
     panelClass: ['full-screen-modal', 'mat-dialog-container','mt-3'],
     hasBackdrop:true,

   });
  }else{
   this.dialog.open(MessageDialogComponent, {
     data: {
       title: 'Info message',
       message: 'In Order to see info you have to Sign in',
     },
     panelClass: [],
   });
  }
 }
}
