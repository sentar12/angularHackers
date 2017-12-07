import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  todos:any = [];
  url: any = 'http://localhost:3050/todos';


  constructor(private http: HttpClient) {
    http.get(this.url).subscribe((result) => {
      console.log(result)
      this.todos = result;
    });
  };



  addTodo (todo: string) {
    const newtodo = {name: todo, iscompleted: false};
    this.todos.push(newtodo);
  }

}
