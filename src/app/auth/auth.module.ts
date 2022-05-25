import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './routes/auth-routing.module';
import { RegisterComponent } from './containers/register/register.component';
import { AuthviewComponent } from './view/authview/authview.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './containers/login/login.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AuthviewComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
  ]
})
export class AuthModule { }
