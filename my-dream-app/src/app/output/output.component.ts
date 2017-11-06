import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  @Input() greeting: string; // récup l'info du parent qui s'appelle greeting et sera une chaine de cara
  @Output() signalParent = new EventEmitter<any>();
  //fonction va émettre un event quand il sera appelé
  constructor() { }

  ngOnInit() {
    // this.greeting = 'Hello';
  }

  imBeyonce() {
    this.signalParent.emit('Queen B');
  }

}
