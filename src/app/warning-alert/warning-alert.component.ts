import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  secretDisplay = false;
  log: any[] = [];
  constructor() {

   }

  showSecretDisplay(){
    this.secretDisplay = !this.secretDisplay;
    // this.log.push(this.log.length +1);
    this.log.push(new Date());
  }

  ngOnInit(): void {
  }
  

}
