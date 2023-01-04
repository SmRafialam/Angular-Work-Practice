import {Component,OnInit} from '@angular/core'

@Component({
  selector: 'app-SuccessAlert',
  templateUrl: './SuccessAlert.component.html',
  styles: [`
    p{
      text-align: center;
      margin-left: 200px;
      margin-right: 200px;
      padding: 5px;
      border: 1px solid black;
    }
    .btn{
      margin-left: 560px
    }
  `]

})

export class SuccessAlertComponent implements OnInit {
  username = "";
  constructor() {
    
   }

  ngOnInit(): void {
  }
}