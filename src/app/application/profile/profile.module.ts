import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatTabsModule } from '@angular/material/tabs';


import { ProfileRoutingModule } from './routes/profile-routing.module';
import { ProfileviewComponent } from './container/profileview/profileview.component';



@NgModule({
  declarations: [
    ProfileviewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FlexLayoutModule,
    SharedModule,
    MatTabsModule,

  ]
})
export class ProfileModule { }
