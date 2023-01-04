import {Component} from '@angular/core'

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    h3{
      color: green;
      text-align: center
    }
    
  `]
})

export class serverComponent{
  serverId:number = 10;
  serverStatus:string = 'offline';
  getServerStatus(){
    return this.serverStatus;
  }
}