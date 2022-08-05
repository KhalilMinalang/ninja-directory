import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  // ninja = {
  //   name: "Yoshi",
  //   belt: "Black"
  // }

  // this doesn't work in ver 14.1.1+ this
  // @Input() ninja;
  @Input() ninja : any;
  // @Input

  // Custom Event Binding
  @Output() onYell = new EventEmitter;
// Custom Event Binding
  fireYellEvent(e:Event) {
    this.onYell.emit(e);
  }

  alertMe(valParam:any) {

    let val = valParam
    alert(val);
  }

  constructor() { }

  // this will initialize whenever this component is created
  ngOnInit(): void {

    console.log(this.ninja);

  }

}
