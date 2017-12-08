import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MyFilterPipe } from './filters/filter-todos';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    MyFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MyFilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
