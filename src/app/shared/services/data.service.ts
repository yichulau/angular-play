import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getSummaryData(){
    let url = 'https://disease.sh/v3/covid-19/all'
    return this.http.get(url);
  }

  getAllCountryData(){
    let url = 'https://disease.sh/v3/covid-19/countries'
    return this.http.get(url);
  }

  getHistorical(){
    let url = 'https://disease.sh/v3/covid-19/historical/all?lastdays=15';
    return this.http.get(url);
  }
  
  getMYCountryData(){
    let url = 'https://disease.sh/v3/covid-19/historical/my?lastdays=10'
    return this.http.get(url);
  }

  getSouthEastAsiaData(){
    let url = 'https://disease.sh/v3/covid-19/countries/my%2Csg%2Cph%2Cidn%2Ctha%2Ckhm%2Cvnm'
    return this.http.get(url);
  }

  getMYCountryDataToday(){
    let url = 'https://disease.sh/v3/covid-19/countries/my?strict=true'
    return this.http.get(url);
  }
  getMYCountryDataYesterday(){
    let url = 'https://disease.sh/v3/covid-19/countries/my?yesterday=true&strict=true'
    return this.http.get(url);
  }
  getMYCountryDataPrevious(){
    let url = 'https://disease.sh/v3/covid-19/countries/my?twoDaysAgo=true&strict=true'
    return this.http.get(url);
  }
}
