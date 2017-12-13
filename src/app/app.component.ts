import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';
import { Todo } from './todo-list/todo';
import { ToDoService } from './services/to-do.service';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todos:any = [];
  
  constructor(private todoService: ToDoService) {};

  ngOnInit(){
    this.loadTodos();
  }

  loadTodos () {
    this.todoService.getAll().subscribe((result) => {
      this.todos = result;
    }); 
  }

  addTodo (todo: string) {
    const newtodo = {name: todo, isCompleted: false};
    this.todoService.add(newtodo).subscribe((result) => {
      this.loadTodos();
    });
  }

}