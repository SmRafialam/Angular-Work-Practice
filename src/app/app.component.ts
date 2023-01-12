import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
