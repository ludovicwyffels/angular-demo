import {Injectable} from '@angular/core';
import {Todo} from '../classes/todo';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private todos: Todo[] = [];

  constructor() {
  }

  public getAllTodos() {

  }
}
