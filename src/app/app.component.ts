import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Todos';
  todos:any = [];
  url: any = 'http://localhost:3050/todos';

  constructor(private http: HttpClient) {

  };

  ngOnInit(){
    this.http.get(this.url).subscribe((result) => {
      console.log(result)
      this.todos = result;
    });
  }

  addTodo (todo: string) {
    const newtodo = {name: todo, isCompleted: false};
    this.todos.push(newtodo);
  }

}