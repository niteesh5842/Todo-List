import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataServiceService } from '../shared/data-service.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onSubmit(form: NgForm) {
    console.log('form submitted');
    console.log(form);

    this.dataService.addTodo(new Todo(form.value.text));
    form.reset();
  }
}
