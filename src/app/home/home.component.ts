import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // homeTitle = "Welcome to the homepage";
  homeTitle = "Welcome to the ninja directory";
  myString = "I like chicken";
  // myBoolean = true;
  myBoolean = false;

  constructor() { }

  // this will initialize whenever this component is created
  ngOnInit(): void {
  }

}
