import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
// import { MasterService } from './services/master.service';
import { UsersService } from './services/users.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UsersService]
})
export class AppComponent {
  userList: any;
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}) {
    this.accounts[updateInfo.id].status = updateInfo.newStatus;
  }
  //numbers = [1,2,3,4,5];
  oddNum = [1,3,5];
  evenNum = [2,4];
  onlyOdd = false;

  name = 'Rafi';

  serverElements = [{type:'server',name:'TestServer',content:'Just a Test'}];

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onServerAdded(serverData: {serverName:string, serverContent:string}){
    console.log(serverData);
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onBlueprintAdded(blueprintData: {serverName:string, serverContent:string}){
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  onIntervalFired(firedNumber: number){
    // console.log(firedNumber);
    if(firedNumber%2 === 0){
      this.evenNumbers.push(firedNumber);
    }else{
      this.oddNumbers.push(firedNumber);
    }
  }



  // constructor(private service:MasterService){
  //   this.userList = this.service.getUserData();
  //   console.log(this.userList);
  // }

  // activeUsers = ['Azmi','Mitul'];
  // inactiveUsers = ['Miraz','Tanim'];

  // onSetToActive(id: number){
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id,1);
  // }
  
  // onSetToInactive(id: number){
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id,1);
  // }
  
  // constructor(private userService:UsersService){
    
  // }

}
