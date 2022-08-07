import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

// import { FilterPipe } from '../filter.pipe';

import { LoggingService } from '../logging.service';

import { DataService } from '../data.service';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],

  // pipes: [
  //   FilterPipe,
  // ],

  // in version 14+ no need for this
  // providers: [
  //   LoggingService

  // ],

  //
  providers: [
    DataService
  ],

})
export class DirectoryComponent implements OnInit {

  // ninja: string;
  // classes = {
  //   'blue': false,
  //   'red': false,
  //   'underline': true
  // }

  // test = true;
  // test = false;

  term = ''

  // ninjas:any = [

  //   {
  //     name: "Yoshi",
  //     belt: "black",
  //   },

  //   {
  //     name: "Ryu",
  //     belt: "red",
  //   },

  //   {
  //     name: "Crystal",
  //     belt: "purple",
  //   },

  // ];

  //
  ninjas:any = [];

  // private logger: LoggingService;

  // constructor(private route: ActivatedRoute) {
  constructor(
    private loggger: LoggingService,
    private dataService: DataService
  ) {

    // this.ninja = route.snapshot.params['ninja'];
    // this.logit();

  }

  logit() {
    this.loggger.log();
  }

  ngOnInit(): void {

    // console.log(this.ninjas);
    this.dataService.fetchData().subscribe(
      // (data) => console.log(data)
      (data) => this.ninjas = data
    )
  }

}
