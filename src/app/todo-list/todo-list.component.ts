import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo';
import { ToDoService } from '../services/to-do.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos;
  removeUrl: any = '/removeTodo';

  constructor(private http: HttpClient, private todoService: ToDoService) {

  };

  ngOnInit() {
  }

  updateTodo (todo: Todo) {
    this.todoService.update(todo).subscribe((result) => {
    });
  }

  removeTodo(id: string) {
    this.http.delete(this.removeUrl + "/" + id).subscribe((result) => {
      console.log(result)
    });
  }
}