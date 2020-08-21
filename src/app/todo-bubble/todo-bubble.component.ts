import { Component, OnInit, Input } from '@angular/core';
import Item from '../Item';

@Component({
  selector: 'app-todo-bubble',
  templateUrl: './todo-bubble.component.html',
  styles: [
    `.bubble {
      border: 3px solid green;
      border-radius: 25px;
    }`
  ]
})
export class TodoBubbleComponent implements OnInit {

  @Input()
  item: Item = {
    id:0,
    title:'Stock Todo',
    createdOn: new Date(),
    completed: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
