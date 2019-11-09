import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() {}

  ngOnInit() {}

  //Set Dynamic classes
  setClasses() {
    let classes = {
      todo: true,
      'is-completed': this.todo.completed
    };
    return classes;
  }

  //Toggle method for check box
  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  //Delete method for x button
  onDelete(todo) {
    console.log('toggled');
  }
}
