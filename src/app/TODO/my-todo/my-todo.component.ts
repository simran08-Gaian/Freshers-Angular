import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-my-todo',
  templateUrl: './my-todo.component.html',
  styleUrls: ['./my-todo.component.scss']
})
export class MyTODOComponent {

  constructor(public todoSrvc : TodoService){
    // this.setValid()
  }

  todo : string = ""

  valid : boolean = false


  // setValid(){
  //   setTimeout(()=>{
  //     console.log("in the func");

  //     this.valid = !this.valid
  //   },1000)
  // }


  addTodo(){
    console.log("added",this.todo);
    // this.todoSrvc.allTodos.push(this.todo)
    this.todoSrvc.setTodo(this.todo)
    this.todo = ""
  }

}
