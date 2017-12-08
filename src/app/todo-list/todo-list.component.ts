import { Component, OnInit, Input } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input() todos;  

  constructor() { }

   completedItems(){
    return this.todos.filter(item => item.isCompleted === false); 
  }

  ngOnInit() {
  }

}
