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
import { CircleShopComponent } from './components/circle-shop/circle-shop.component';
import { CaruselComponent } from './components/carusel/carusel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DealCardComponent } from './components/deal-card/deal-card.component';
import { MatCardModule } from '@angular/material/card';
import { PlayerComponent } from './components/player/player.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { MessageDialogComponent } from './components/message-dialog/message-dialog.component';
//import {SingleMediaPlayer} from './single-media-player';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReviewComponent } from './components/review/review.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VotechartComponent } from './components/votechart/votechart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchcategoryComponent } from './components/searchcategory/searchcategory.component';
import { InfoComponent } from './components/info/info.component';
import { CriticsComponent } from './components/critics/critics.component';



@NgModule({
  declarations: [
    TopToolbarComponent,
    SidenavComponent,
    HeroBanerComponent,
    AboutComponent,
    FooterComponent,
    RegisterSuggestComponent,
    CircleShopComponent,
    CaruselComponent,
    DealCardComponent,
    PlayerComponent,
    MessageDialogComponent,
    ReviewComponent,
    VotechartComponent,
    SearchcategoryComponent,
    InfoComponent,
    CriticsComponent,

  ],
  exports: [
    TopToolbarComponent,
    HeroBanerComponent,
    AboutComponent,
    FooterComponent,
    RegisterSuggestComponent,
    CaruselComponent,
    DealCardComponent,
    PlayerComponent,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReviewComponent,
    VotechartComponent,
    SearchcategoryComponent,
    InfoComponent,
    CriticsComponent

  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    RouterModule,
    CarouselModule,
    MatCardModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatDialogModule,
    MatSnackBarModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    MatExpansionModule

  ],
})
export class SharedModule {}
