import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }


  allTodos : string[] = []

  setTodo(todo:string):void{
    this.allTodos.push(todo)
  }

}
