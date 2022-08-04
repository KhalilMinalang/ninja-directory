import { Component } from '@angular/core';

// DECORATOR @
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  templateUrl: 'app.component.html',
  // can replace with for small projects
  // template: '<h1>{{name}}</h1>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!, woop woop.';
  name = 'ninja';
}
