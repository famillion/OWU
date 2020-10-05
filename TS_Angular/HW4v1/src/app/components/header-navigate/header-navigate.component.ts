import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-navigate',
  templateUrl: './header-navigate.component.html',
  styleUrls: ['./header-navigate.component.css']
})
export class HeaderNavigateComponent implements OnInit {

  width = '40px';
  imgLink = 'assets/logo/pngcast_jolly-roger.png';
  isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
