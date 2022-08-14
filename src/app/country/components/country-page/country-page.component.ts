import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss']
})
export class CountryPageComponent implements OnInit {

  allCountryData : any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllCountryData().subscribe((obj)=>{
      this.allCountryData = obj;
    })
  }

}
