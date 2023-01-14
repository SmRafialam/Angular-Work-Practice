import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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





}
