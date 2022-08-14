import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  toggleSideNavMobile : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideNav(event : Event){

    this.toggleSideNavMobile = !this.toggleSideNavMobile
  }
}
