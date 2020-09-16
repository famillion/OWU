import { Component } from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.css']
})
export class TodoBlockComponent {

 constructor(private todoService: TodoService) {
 }

  getTodoService(): TodoService{
    return this.todoService;
  }

}
