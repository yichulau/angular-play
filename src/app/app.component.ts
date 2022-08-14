import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'covid-app';
  screenWidth : number;
  isMobileScreen: boolean;
  isDesktopScreen : boolean;

  @HostListener('window:resize',['$event'])
  getScreenSize(event: Event){
    this.screenWidth = window.innerWidth;
    this.isMobileScreen = this.screenWidth < 1200 ? true : false;
    this.isDesktopScreen = this.screenWidth >= 1200 ? true : false;
  }


}
