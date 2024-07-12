import { ToDoContextInterface } from '../type/ToDoContext.Interface';

export const initialState: ToDoContextInterface = {
  todos: [],
  addToDo: () => {},
  deleteToDo: () => {},
  toggleToDo: () => {},
  deleteAllTodos: () => {},
  clearCompletedTodos: () => {},
}