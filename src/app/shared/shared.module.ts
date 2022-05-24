import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './components/top-toolbar/top-toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { HeroBanerComponent } from './components/hero-baner/hero-baner.component';
import { AboutComponent } from './components/about/about.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RegisterSuggestComponent } from './components/register-suggest/register-suggest.component';




@NgModule({
  declarations: [
    TopToolbarComponent,
    SidenavComponent,
    HeroBanerComponent,
    AboutComponent,
    FooterComponent,
    RegisterSuggestComponent,

  ],
  exports: [
    TopToolbarComponent,
    HeroBanerComponent,
    AboutComponent,
    FooterComponent,
    RegisterSuggestComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule
  ]
})
export class SharedModule { }
