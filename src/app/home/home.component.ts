import { Component, OnInit } from '@angular/core';

@Component ( {
  selector   : 'app-home',
  templateUrl: './home.component.html',
  styleUrls  : [ './home.component.styl' ]
} )
export class HomeComponent implements OnInit {
  
  private text : string = 'ng';
  
  constructor () {
  }
  
  ngOnInit () {
  }
  
}
