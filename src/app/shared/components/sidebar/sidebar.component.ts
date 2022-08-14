import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  screenWidth : number;
  isMobileScreen: boolean;
  isDesktopScreen : boolean;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize',['$event'])
  getScreenSize(event: Event){
    this.screenWidth = window.innerWidth;
    this.isMobileScreen = this.screenWidth < 767.98 ? true : false;
    this.isDesktopScreen = this.screenWidth >= 1200 ? true : false;
  }


}
