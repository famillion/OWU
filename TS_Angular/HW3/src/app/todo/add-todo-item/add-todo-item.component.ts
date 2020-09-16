import {Component} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent {

  constructor(private todoService: TodoService) {
  }

  getTodoService(): TodoService{
    return this.todoService;
  }

}
