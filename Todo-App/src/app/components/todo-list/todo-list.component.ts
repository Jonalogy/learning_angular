import { Component, OnInit } from '@angular/core';
import { MockTodoListData } from '../../mock_data/mock_data';
import { ITodo } from '../../models/models';
import { TodoService } from '../../services/todo-db.service';

@Component({
  selector: 'todo-list',
  providers: [TodoService],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  allTodoData: ITodo[];

  constructor(private todoDataSvc: TodoService) {}

  ngOnInit(): void {
    this.allTodoData = this.todoDataSvc.getTodoData();
  }

  onDeleteHandler(idx): void {
    this.allTodoData.splice(idx, 1);
  }

  onEditHandler(idx): void {
    this.todoDataSvc.toggleEditTodoData(idx);
  }
}
