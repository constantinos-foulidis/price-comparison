import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/service/core.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  movies: any = [];
  data:any = [
    { id:1,
      src:'/assets/img/lidl.png',
      alt:'lidl',
    },
    { id:2,
      src:'/assets/img/marinopoulos.png',
      alt:'marinopoulos',
    },
    { id:3,
      src:'/assets/img/masouths.png',
      alt:'masouths',
    },
    { id:4,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:5,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:6,
      src:'/assets/img/ab.png',
      alt:'ab',
    },
    { id:7,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:8,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:9,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:10,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
    ,
    { id:11,
      src:'/assets/img/ab.png',
      alt:'ab',
    }
];
  constructor(private coreSercive: CoreService) { }

  ngOnInit(): void {
     this.coreSercive.getMovies().subscribe(data => {
        this.movies = data;
     })
  }

}
