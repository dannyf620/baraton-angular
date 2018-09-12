import { Component, OnInit } from '@angular/core';

declare const GameManager;
declare const HTMLActuator;
declare const LocalStorageManager;
declare const KeyboardInputManager;
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})

export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let game = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalStorageManager);    
  }

}
