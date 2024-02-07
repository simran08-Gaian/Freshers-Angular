import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss']
})
export class TodoCardComponent {
  
  @Input() todo : string = ""
  @Input() index : number = 0

  
  remove(delInd: number) {
  console.log(delInd);
  
  }
}
