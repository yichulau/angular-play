import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.scss']
})
export class SummaryChartComponent implements OnInit, OnChanges {
  @Input() data: any;
  summaryData: any = {};
  todayCases: number;
  yesterdayCases: number;
  previousCases: number;
  countryData: any;

  constructor(private dataService : DataService) { }


  ngOnInit(): void {

  }
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


  // Bar Chart Data
  barChartData: ChartDataSets[] = [{
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
  barChartLabels: Label[] = [];
  barChartOptions: ChartOptions = {
    responsive: true,
  }
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  ngOnChanges(): void {
    this.dataService.getHistorical()
      .subscribe((data:any)=>{
        let cleanData = data.cases;
        const res = Object.entries(cleanData).map(([data, obj]) => ({data, obj}))
        this.lineChartData[0].data = res.map((obj: any) => obj['obj']);
        this.lineChartLabels = res.map((obj: any) => obj['data']);
      });
    
      this.dataService.getSouthEastAsiaData()
        .subscribe((data:any) =>{
            this.barChartData[0].data = data.map((obj:any) => obj['cases']);
            this.barChartLabels = data.map((obj:any) => obj['country']);
        })

  }


 
  
}
