export interface ITodo {
  active: boolean;
  edit: boolean;
  task: string;
}

export interface ITodoService {
  getTodoData(): ITodo[];
  addTodoData(newTodoData: string): void;
  toggleEditTodoData(idx: number): void;
  getEditTodoValue(idx: number): string;
  changeTodoValue(idxToEdit: number, editedTask: string): void;
}
