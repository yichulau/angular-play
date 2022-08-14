import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountryRoutingModule } from './country-routing.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { CountryTableComponent } from './components/country-table/country-table.component';


@NgModule({
  declarations: [
    CountryPageComponent,
    CountryTableComponent
  ],
  imports: [
    CommonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
