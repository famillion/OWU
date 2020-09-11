import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: string;
  @Input() index: number;

  @Output() removeStrIdx: EventEmitter<number> = new EventEmitter<number>();

  isChanged = false;

  ngOnInit(): void {
  }

  toRemove(): void{
    this.removeStrIdx.emit(this.index);
  }

}
