import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-votechart',
  templateUrl: './votechart.component.html',
  styleUrls: ['./votechart.component.scss']
})
export class VotechartComponent implements OnInit {

  single: any[] = [];
  view:any = [700, 400];

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Movies';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Stars';
  @Input() data:any
  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {

  }
  ngOnInit(): void {
    console.log(this.data)
  }

  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
  // {
  //   "name": "Germany",
  //   "value": 8940000
  // },
  // {
  //   "name": "USA",
  //   "value": 5000000
  // },
  // {
  //   "name": "France",
  //   "value": 7200000
  // }
}
