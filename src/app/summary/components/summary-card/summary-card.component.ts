import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-summary-card',
  templateUrl: './summary-card.component.html',
  styleUrls: ['./summary-card.component.scss']
})
export class SummaryCardComponent implements OnInit, OnChanges {
  @Input() data: any;
  summaryData: any = {};

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.summaryData = this.data;
    console.log(this.data);
  }



}
