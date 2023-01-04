import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = '';
  serverCreated = false;
  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
      this.serverCreated = true;
    },2000)
   }

  ngOnInit(): void {
  }

  onServerCreation(){
    this.serverCreationStatus = 'Server was created.';
  }

  onUpdateServerName(event:any){
    this.serverName = (<HTMLInputElement>event.target).value;
    // console.log(event);
  }
}
