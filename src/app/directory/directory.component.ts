import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
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

  ninjas = [

    {
      name: "Yoshi",
      belt: "black",
    },

    {
      name: "Ryu",
      belt: "red",
    },

    {
      name: "Crystal",
      belt: "purple",
    },

  ];

  constructor(private route: ActivatedRoute) {

    // this.ninja = route.snapshot.params['ninja'];
  }

  ngOnInit(): void {

    // console.log(this.ninja);
  }

}
