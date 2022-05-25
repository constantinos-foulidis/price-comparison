import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  data:any = [
    {
    src:'/assets/img/lidl.png',
    alt:'lidl',
    },
    {
      src:'/assets/img/marinopoulos.png',
      alt:'marinopoulos',
    },
    {
      src:'/assets/img/masouths.png',
      alt:'masouths',
    },
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    {
      src:'/assets/img/ab.png',
      alt:'ab',
    }
];
  constructor() { }

  ngOnInit(): void {
  }

}
