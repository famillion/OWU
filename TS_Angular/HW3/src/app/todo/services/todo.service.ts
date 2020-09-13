import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoArr = [];

  addToDo(el: HTMLInputElement): void{
    this.todoArr.push(el.value);
    el.value = '';
  }

  removeStr(idx): void{
    this.todoArr = this.todoArr.filter(((value, index) => index !== idx));
  }
}
