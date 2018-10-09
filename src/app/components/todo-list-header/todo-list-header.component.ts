import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Todo} from '../../classes/todo';

@Component({
  selector: 'app-todo-list-header',
  templateUrl: './todo-list-header.component.html',
  styleUrls: ['./todo-list-header.component.css'],
})
export class TodoListHeaderComponent implements OnInit {

  newTodo: Todo = new Todo();

  @Output() add: EventEmitter<Todo> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  addTodo() {
    if (this.newTodo.title.trim() !== '') {
      this.newTodo.id = Date.now();
      this.add.emit(this.newTodo);
      this.newTodo = new Todo();
    }

  }

}
