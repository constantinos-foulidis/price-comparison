import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationRoutingModule } from './router/application-routing.module';
import { ApplicationComponent } from './container/application/application.component';
import { ApplicationRootViewComponent } from './application-root-view/application-root-view.component';


@NgModule({
  declarations: [
    ApplicationComponent,
    ApplicationRootViewComponent
  ],
  imports: [
    CommonModule,
    ApplicationRoutingModule
  ]
})
export class ApplicationModule { }
