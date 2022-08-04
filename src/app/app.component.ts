import { Component } from '@angular/core';

// IMPORT
// in ver 14.1.1+ this will throw error
// import { HomeComponent } from './home/home.component';

// DECORATOR @
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: 'app.component.html',
  // can replace with for small projects
  // template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css'],

  // in ver 14.1.1+ this will throw error
  // directives: [HomeComponent],
})

export class AppComponent {
  title = 'app works!, woop woop.';
  name = 'ninja';
}
