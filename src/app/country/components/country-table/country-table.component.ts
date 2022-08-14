import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.scss']
})
export class CountryTableComponent implements OnInit, OnChanges {
  @Input() data : any;
  countryApiData: any = {};

  constructor() { }

  ngOnInit(): void {

  }
  
  ngOnChanges() {
    if(this.data){
      this.countryApiData = this.data;

    } else {
      console.log('loading')
    }
  }


}
