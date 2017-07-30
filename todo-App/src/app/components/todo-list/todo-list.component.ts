import { Component, OnInit } from '@angular/core';
import { MockTodoListData } from '../../mock_data/mock_data';
import { i_Todo } from '../../models/models';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  allTodoData: i_Todo[];

  ngOnInit() {
    this.allTodoData = MockTodoListData;
  }

  onDeleteHandler(idx) {
    this.allTodoData.splice(idx, 1);
  }
}
