import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3{
      color: green;
      text-align: center;
    }
    .online{
      color: white;
    }
  `]
})

export class serverComponent{
  serverId:number = 10;
  serverStatus:string = 'offline';
  getServerStatus(){
    return this.serverStatus;
  }

  constructor(){
    this.serverStatus = Math.random() > 0.5 ? 'online':'offline';

  }
  getColor(){
    return this.serverStatus === 'online'? 'green':'red';
  }
}