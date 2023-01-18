import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  activeUsers = ['Azmi','Mitul'];
  inactiveUsers = ['Miraz','Tanim'];

  constructor(private counterService:CounterService) { }

  setToActive(id: number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id,1);
    this.counterService.increamentInactiveToActive();
  }
  
  setToInactive(id: number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id,1);
    this.counterService.increamentActiveToInactive();

  }

}
