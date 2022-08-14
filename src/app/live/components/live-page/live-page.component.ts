import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts/highmaps';
import * as worldMap from '@highcharts/map-collection/custom/world.geo.json';
import { DataService } from 'src/app/shared/services/data.service';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-live-page',
  templateUrl: './live-page.component.html',
  styleUrls: ['./live-page.component.scss']
})
export class LivePageComponent implements OnInit {
  liveData: any = [];

  constructor(private dataService: DataService) { }
  // Line Chart Data
  lineChartData: ChartDataSets[] = [{
      data: [],
      label: 'Confirmed Total Cases',
      backgroundColor: [
        '#FBAB7E'
      ],
      borderColor: [
        '#F7CE68'
      ],
  }];
  lineChartLabels: Label[] = [];
  lineChartOptions: ChartOptions = {
    responsive: true
  }
  lineChartType: ChartType = 'line';
  lineChartLegend = true;
  lineChartPlugins = [];


  // polar Chart Data
  polarChartData: ChartDataSets[] = [{
    data: [],
    label: 'Confirmed Total Cases',
    backgroundColor: [
      '#FBAB7E',
      '#004CA3',
      '#8A51A5',
      '#CB5E99',
      '#F47B89',
      '#FFA47E',
      '#FFD286',
    ],
    borderColor: [
      '#FBAB7E',
      '#004CA3',
      '#8A51A5',
      '#CB5E99',
      '#F47B89',
      '#FFA47E',
      '#FFD286',
    ],
  }];
  polarChartLabels: Label[] = [];
  polarChartOptions: ChartOptions = {
    responsive: true
  }
  polarChartType: ChartType = 'polarArea';
  polarChartLegend = true;
  polarChartPlugins = [];

  // Line Dead Chart Data
  lineDeadChartData: ChartDataSets[] = [{
    data: [],
    label: 'Confirmed Total Death Cases',
    backgroundColor: [
      '#CB5E99',
    ],
    borderColor: [
      '#CB5E99',
    ],
  }];
  lineDeadChartLabels: Label[] = [];
  lineDeadChartOptions: ChartOptions = {
    responsive: true
  }
  lineDeadChartType: ChartType = 'line';
  lineDeadChartLegend = true;
  lineDeadChartPlugins = [];

  // Line Dead Chart Data
  barChartData: ChartDataSets[] = [{
    data: [],
    label: 'Confirmed Total Death Cases',
    backgroundColor: [
      '#FBAB7E',
      '#004CA3',
      '#8A51A5',
      '#CB5E99',
      '#F47B89',
      '#FFA47E',
      '#FFD286',
    ],
    borderColor: [
      '#FBAB7E',
      '#004CA3',
      '#8A51A5',
      '#CB5E99',
      '#F47B89',
      '#FFA47E',
      '#FFD286',
    ],
  }];
  barChartLabels: Label[] = [];
  barChartOptions: ChartOptions = {
    responsive: true
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  ngOnInit(): void {
    this.dataService.getMYCountryData()
    .subscribe((data:any)=>{
      let cleanCasesData = data.timeline.cases;
      let cleanDeadData = data.timeline.deaths;
      const res = Object.entries(cleanCasesData).map(([data, obj]) => ({data, obj}))
      this.lineChartData[0].data = res.map((obj: any) => obj['obj']);
      this.lineChartLabels = res.map((obj: any) => obj['data']);

      const resDead = Object.entries(cleanDeadData).map(([data, obj]) => ({data, obj}))
      this.lineDeadChartData[0].data = resDead.map((obj: any) => obj['obj']);
      this.lineDeadChartLabels = resDead.map((obj: any) => obj['data']);
    });

    this.dataService.getSouthEastAsiaData()
    .subscribe((data:any) =>{
        this.polarChartData[0].data = data.map((obj:any) => obj['cases']);
        this.polarChartLabels = data.map((obj:any) => obj['country']);
        this.barChartData[0].data = data.map((obj:any) => obj['cases']);
        this.barChartLabels = data.map((obj:any) => obj['country']);
    })

    // this.dataService.getAllCountryData()
    //   .subscribe((data:any) =>{
    //     this.liveData = data.map((country: any) =>
    //     [country.countryInfo.iso2?.toLowerCase(), country.cases]);
    //     this.chartOptions.series[0].data = this.liveData;
    //     this.Highcharts.mapChart('container',this.chartOptions)
    //   },(err : any) =>{
    //     console.log(err);
    //   });

  }

}
