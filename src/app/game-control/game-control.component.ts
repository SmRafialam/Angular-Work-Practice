import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() intervalFired =  new EventEmitter<number>();
  interval:any;
  i = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame(){
    this.interval = setInterval(()=>{
      this.intervalFired.emit(this.i + 1);
      this.i++;
    },1000);
  }

  onStopGame(){
    clearInterval(this.interval);
  }

}
