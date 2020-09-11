import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TodoBlockComponent } from './todo/todo-block/todo-block.component';
import { TodoItemComponent } from './todo/todo-item/todo-item.component';
import { AddTodoItemComponent } from './todo/add-todo-item/add-todo-item.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoBlockComponent,
    TodoItemComponent,
    AddTodoItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
