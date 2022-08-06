import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
  // providedIn: 'any',
})
export class LoggingService {

  log() {
    console.log('I am the logging service')
  }

  constructor() {
    // this.log();
  }
}
