import { Component, Input } from '@angular/core';
import { TodoService } from '../../services/todo-db.service';

@Component({
  selector: 'edit-todo',
  providers: [TodoService],
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() idxToEdit: number;

  constructor(private todoDataSvc: TodoService) {}

  public getTargetTodoValue(idxToEdit: number) {
    return this.todoDataSvc.getEditTodoValue(idxToEdit);
  }

  public onConfirmEditHandler(idxToEdit: number, editedTask: string) {
    this.todoDataSvc.changeTodoValue(idxToEdit, editedTask);
  }
}
