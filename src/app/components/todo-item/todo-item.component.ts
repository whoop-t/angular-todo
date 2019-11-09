import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from 'src/app/models/Todo';
import { TodoService } from '../../service/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) {}

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
    //UI toggle
    todo.completed = !todo.completed;
    //Toggle on server
    this.todoService.toggleCompleted(todo).subscribe((todo) => {
      console.log(todo);
    });
  }

  //Delete method for x button
  onDelete(todo) {
    this.deleteTodo.emit(todo);
  }
}
