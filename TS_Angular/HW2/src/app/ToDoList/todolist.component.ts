import {Component, Input} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-todo-item',
  templateUrl: 'todolist.component.html',
  styleUrls: ['../app.component.css']
})

export class TodolistComponent {

  @Input() todo: AppComponent;

}
