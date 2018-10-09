import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {

  private todos: Todo[] = [];

  constructor() {
  }

  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }

  deleteTodoById(todoId: number): void {
    const removeIndex = this.getIndex(todoId);
    console.log(removeIndex);
    console.log(this.todos);
    this.todos.splice(removeIndex, 1);
  }

  updateTodo(todo: Todo): void {
    const updateIndex = this.todos.map((todo: Todo) => {
      return todo.id;
    }).indexOf(todo.id);
    this.todos[updateIndex] = todo;
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(todoId: number): Todo {
    const index = this.getIndex(todoId);
    return this.todos[index];
  }

  toggleTodoComplete(todo: Todo) {
    todo.complete = !todo.complete;
  }

  private getIndex(todoId: number): number {
    return this.todos.map((todo: Todo) => {
      return todo.id;
    }).indexOf(todoId);
  }
}
