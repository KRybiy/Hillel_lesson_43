import ToDoItemInterface from "./ToDoItem.Interface";

export interface ToDoContextInterface {
  todos: ToDoItemInterface[];
  addToDo: (todo: ToDoItemInterface) => void;
  deleteToDo: (id: string) => void;
  toggleToDo: (id: string) => void;
  deleteAllTodos: () => void;
  clearCompletedTodos: () => void;
}