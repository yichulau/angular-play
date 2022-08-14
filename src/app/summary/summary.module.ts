import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SummaryRoutingModule } from './summary-routing.module';
import { SummaryPageComponent } from './components/summary-page/summary-page.component';
import { SummaryCardComponent } from './components/summary-card/summary-card.component';
import { SummaryChartComponent } from './components/summary-chart/summary-chart.component';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    SummaryPageComponent,
    SummaryCardComponent,
    SummaryChartComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    SharedModule,
    ChartsModule,
    HighchartsChartModule
  ]
})
export class SummaryModule { }
