import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName:string , serverContent:string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName:string , serverContent:string}>();
  newServerName = '';
  newServerContent = '';

  @ViewChild('serverContentInput') serverContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput:HTMLInputElement){
    //console.log(this.newServerName,this.newServerContent);
    // console.log(nameInput.value);
    this.serverCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
  onAddBlueprint(nameInput: HTMLInputElement){
    this.blueprintCreated.emit({
      //serverName: this.newServerName,
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value

    });
    //console.log(this.blueprintCreated);

  }
}
