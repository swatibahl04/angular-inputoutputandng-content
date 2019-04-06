import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <h1> Child Component </h1>
  <p>Name recieved from parent {{name}}!</p>
   <button (click)="sendNameLength()">Send Name Length</button>
   <ng-content></ng-content>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class ChildComponent  {
  @Input() name: string;

  @Output() sendnameLengthEvent = new EventEmitter<number>();

  sendNameLength()
  {
    this.sendnameLengthEvent.emit(this.name.length);
  }
}
