import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/service/core.service';
import { SeessionStorageService } from 'src/app/service/seession-storage.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MessageDialogComponent } from 'src/app/shared/components/message-dialog/message-dialog.component';
import { PlayerComponent } from 'src/app/shared/components/player/player.component';
import { InfoComponent } from 'src/app/shared/components/info/info.component';
import { ReviewComponent } from 'src/app/shared/components/review/review.component';

@Component({
  selector: 'app-profileview',
  templateUrl: './profileview.component.html',
  styleUrls: ['./profileview.component.scss']
})
export class ProfileviewComponent implements OnInit {
  email:string | null = ''
  userName: string | null = ''
  likedMovies:any ;
  constructor(private sStorage: SeessionStorageService, private coreService: CoreService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userName = this.sStorage.getItem('username');
   this.email = this.sStorage.getItem('email');
   this.coreService.getMovies().subscribe(data => {
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
        this.likedMovies = data;
     }else{
      this.likedMovies = data;
     }
   })
  }

  open(data:any){
    this.dialog.open(PlayerComponent, {
      data: data,
      maxWidth: '100%',
      maxHeight: '100%',
      height: '100%',
      width: '100%',
      panelClass: ['full-screen-modal', 'mat-dialog-container'],
      hasBackdrop:true,

    });

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

}
