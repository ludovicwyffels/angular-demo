import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from '../../classes/todo';
import {TodoDataService} from '../../services/todo-data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {

  @Input() todos: Todo[];
  @Output() remove: EventEmitter<Todo> = new EventEmitter();
  @Output() toggleComplete: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoDataService: TodoDataService) {
  }

  ngOnInit() {
    this.todos = this.todoDataService.getAllTodos();
  }

  onToggleTodoComplete(todo: Todo) {
    this.toggleComplete.emit(todo);
  }

  onRemoveTodo(todo: Todo) {
    this.remove.emit(todo);
  }
}
