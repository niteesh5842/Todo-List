import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  todos: Todo[] = [
    // new Todo('this is a test'),
    // new Todo(
    //   'lorem ipsum hdgdgd jhgfkghfb reytwuvhkjs oihuishfiohff khioushfohfoihhiohf'
    // ),
  ];

  constructor() {}

  getAllTodos() {
    return this.todos;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
