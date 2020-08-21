import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import Item from '../Item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {

  todos$ : Observable<Item[]>;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todos$ = this.todoService.getTodos();
  }

}
