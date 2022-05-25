import { Component, OnInit,Input, ViewChild, ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-carusel',
  templateUrl: './carusel.component.html',
  styleUrls: ['./carusel.component.scss']
})
export class CaruselComponent implements OnInit {
  @ViewChild('test')test: ElementRef | undefined;
  @Input() data:any
  translate: number = 200;
  constructor(private render:Renderer2) { }

  ngOnInit(): void {
  }
  goToSpesificOffers(): void{

  }

  goLeft(){
    this.translate = this.translate-200;
    console.log(this.translate);
    this.render.setStyle(this.test?.nativeElement, 'transform', `translateX(${this.translate})`);

  }
  goRight(){
    this.translate = this.translate+200;
    console.log(this.translate);
    console.log(this.test);
    this.render.setStyle(this.test?.nativeElement, 'transform', `translateX(${this.translate})`);

  }
}
