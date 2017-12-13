import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo-list/todo';
import { Observable } from 'rxjs';

@Injectable()
export class ToDoService {
  host: string = "";

  constructor(private _http: HttpClient) {

  }

  getAll(): Observable<Todo[]> {
    let _url = this.host + "/todos";

    return this._http.get(_url)
      .map((result: Response) => {
        return result;
      })
      .catch(this.handleError);
  }

  add(newTodo): Observable<Todo[]> {
    let _url = this.host + "/addTodo";

    return this._http.post(_url, newTodo)
      .map((result: Response) => {
        return result;
      })
      .catch(this.handleError);
  }

  update(todo): Observable<Todo> {
    let todoCopy = Object.assign({}, todo);

    let _url = this.host + "/updateTodo/" + todo._id;
    delete todoCopy._id;
    
    return this._http.put(_url, todoCopy)
      .map((result: Response) => {
        console.log('line 42');
        console.log(result);
        return result;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
