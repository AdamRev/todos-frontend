import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoBubbleComponent } from './todo-bubble/todo-bubble.component';

const routes: Routes = [
  {
    path: 'all',
    component: TodoListComponent
  },
  {
    path: 'one',
    component: TodoBubbleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
