import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  inputTodo = '';
  @Input() todoArr: [];

  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  addTodoClick(): void{
    if (this.inputTodo.trim()) {
      this.addTodo.emit(this.inputTodo);
      this.inputTodo = '';
    }
  }
}
