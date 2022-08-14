import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // Get World All Data
  getSummaryData(){
    let url = 'https://disease.sh/v3/covid-19/all'
    return this.http.get(url);
  }
   // Get World All Data
  getAllCountryData(){
    let url = 'https://disease.sh/v3/covid-19/countries'
    return this.http.get(url);
  }

   // Get World All Historical Data fo last 15 days
  getHistorical(){
    let url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=15';
    return this.http.get(url);
  }
  
   // Get Malaysia from last 10 datas Data
  getMYCountryData(){
    let url = 'https://disease.sh/v3/covid-19/historical/my?lastdays=10'
    return this.http.get(url);
  }
  // Get SouthEast Asia country Data
  getSouthEastAsiaData(){
    let url = 'https://disease.sh/v3/covid-19/countries/my%2Csg%2Cph%2Cidn%2Ctha%2Ckhm%2Cvnm'
    return this.http.get(url);
  }


}
