import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos = [];

  addTodo (todo: string) {
    this.todos.push(todo);
    console.log(this.todos)
  }

}
