import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css']
})
export class ClickComponent implements OnInit {

  @Output() signal = new EventEmitter<string>();
  
  yolo: string;

  constructor() { }

  ngOnInit() {
    // componentInstance.event.emit
    // this.signal.emit('hello');
    this.yolo = 'yolo';
  }

  // monEventAuClick() {
  //   console.log("click ok");
  // }

  onClick() {
    this.yolo = 'YOLO';
    this.signal.emit('hello');
}


}

// je peux récup avec mon component tous les éléments d'export, comme des propriétés de ma classe
// ex je peux faire component.monEventAuClick