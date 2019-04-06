import {Component} from '@angular/core';
@Component({
selector : 'app-parent',
template: `
<h1> Parent Component </h1>
NameLength : {{nameLength}}
<p>Name <input name="tn" type="text" [(ngModel)]="parentName"></p>
<app-child [name]= "parentName" (sendnameLengthEvent)="recievedNameLength($event)">
  <h1>{{nameLength}}</h1>
</app-child>
`
})
export class ParentComponent {
parentName : string;
nameLength : number;

recievedNameLength($event){
this.nameLength = $event;

}


}