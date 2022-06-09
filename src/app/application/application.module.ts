import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './router/application-routing.module';
import { ApplicationComponent } from './container/application/application.component';
import { ApplicationRootViewComponent } from './application-root-view/application-root-view.component';
import { SharedModule } from '../shared/shared.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from "@angular/flex-layout";
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VotesComponent } from './components/votes/votes.component';






@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationRootViewComponent,
    SearchComponent,
    VotesComponent,
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule,
    SharedModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule
  ],
  providers:[
    { provide: MAT_DIALOG_DATA, useValue: {} },
  ]
})
export class ApplicationModule { }
