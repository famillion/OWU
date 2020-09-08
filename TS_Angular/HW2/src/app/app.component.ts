import { Component } from '@angular/core';
import {TodoservicesService} from './Services/todoservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List: ';

  todoList: string[];

  constructor(private todoService: TodoservicesService) {
    this.todoService.getToDoes().subscribe(todos => {
      this.todoList = todos;
    });
  }




}
