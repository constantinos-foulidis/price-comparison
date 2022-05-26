import { Component, OnInit,Input, ViewChild, ElementRef } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
  @ViewChild('test')test: ElementRef | undefined;
  @Input() data:any
  constructor() { }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 800,
    navText: ['', ''],
    nav: true
  }

  ngOnInit(): void {
  }
  goToSpesificOffers(): void{

  }

}
