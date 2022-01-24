import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.css'],
})
export class EditTodoDialogComponent implements OnInit {
  // @ViewChild('form') f: NgForm;
  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public todoo: Todo
  ) {}

  ngOnInit(): void {}

  close() {
    this.dialogRef.close();
  }

  onSubmitForm(form: NgForm) {
    console.log(form);
    // this.todoo.text = form.value.text;
    const updateTodo = {
      ...this.todoo,
      ...form.value,
    };
    // this.dialogRef.close(this.todoo);
    this.dialogRef.close(updateTodo);
  }
}
