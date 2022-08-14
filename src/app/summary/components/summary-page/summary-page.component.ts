import { Component, HostListener, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent implements OnInit {

  apiData : any;
  liveData: any = [];

  constructor(private dataService: DataService) { }

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor = 'mapChart';

  chartOptions : Highcharts.Options | any = {
    chart:{
      map: worldMap
    },
    title:{
      text:'Covid 19 World Data'
    }, 
    subtitle:{
      text: 'Confirmed Cases Live'
    },
    mapNavigation:{
      enabled: true,
      buttonOptions:{
        alignTo: 'spacingBox'
      }
    },
    legend: {
      enabled: true
    },
    colorAxis: {
      min: 0
    },
    series:[{
      type: 'map',
      name: 'COVID-19 Data',
      states:{
        hover:{
          color: '#dc3545'
        }
      },
      dataLabels:{
        enabled: true,
        format: '{point.name}'
      },
      allAreas: false,
      data:[

      ]
    }]
  }

  ngOnInit(): void {
    this.dataService.getSummaryData().subscribe(
      (data) => {
        this.apiData = data;
      }
    );

    this.dataService.getAllCountryData()
    .subscribe((data:any) =>{
      this.liveData = data.map((country: any) =>
      [country.countryInfo.iso2?.toLowerCase(), country.cases]);
      this.chartOptions.series[0].data = this.liveData;
      this.Highcharts.mapChart('container',this.chartOptions)
    },(err : any) =>{
      console.log(err);
    });
    
  }


}
