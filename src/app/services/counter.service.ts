import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  InactiveToActiveCounter = 0;

  increamentActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('Active To Inactive: '+this.activeToInactiveCounter);
  }

  increamentInactiveToActive(){
    this.InactiveToActiveCounter++;
    console.log('Inactive To Active: '+this.InactiveToActiveCounter);
  }

  constructor() { }
}
