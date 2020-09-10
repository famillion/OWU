import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-block',
  templateUrl: './todo-block.component.html',
  styleUrls: ['./todo-block.component.css']
})
export class TodoBlockComponent implements OnInit {

  todoArr = [];

  ngOnInit(): void {
  }

  addToDo(str: string): void{
    this.todoArr.push(str);
  }

}
