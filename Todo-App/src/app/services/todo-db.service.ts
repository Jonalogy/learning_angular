import { Injectable } from '@angular/core';
import { ITodo, ITodoService } from '../models/models';
import { MockTodoListData } from '../mock_data/mock_data';

@Injectable()
export class TodoService implements ITodoService {
  todoData: ITodo[];

  constructor() {
    this.todoData = MockTodoListData;
  }

  public getTodoData(): ITodo[] {
    return this.todoData;
  }

  public addTodoData(newTodoData: string): void {
    const newTodoObj: ITodo = { active: true, edit: false, task: newTodoData };
    this.todoData.unshift(newTodoObj);
  }

  public toggleEditTodoData(idx: number): void {
    this.todoData[idx].edit = !this.todoData[idx].edit;
  }

  public getEditTodoValue(idx: number): string {
    return this.todoData[idx].task;
  }

  public changeTodoValue(idxToEdit: number, editedTask: string): void {
    this.todoData[idxToEdit].task = editedTask;
    this.toggleEditTodoData(idxToEdit);
  }
}
