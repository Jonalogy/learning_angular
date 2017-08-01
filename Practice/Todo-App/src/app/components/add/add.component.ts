import { Component, OnInit, OnChanges } from '@angular/core';
import { ITodo } from '../../models/models';
import { TodoService } from '../../services/todo-db.service';

@Component({
  selector: 'addTodo',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [TodoService]
})
export class AddComponent {
  todoData: ITodo[];

  constructor(private todoService: TodoService) {}

  onAddHandler(task) {
    console.log(`Adding ${task}...`);
    this.todoService.addTodoData(task);
    return false;
  }
}
