import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TodoService} from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() index: number;

  isChanged = false;

constructor(private todoService: TodoService) {
}

}
