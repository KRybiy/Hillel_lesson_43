import ToDoItemInterface from "./ToDoItem.Interface";
interface ToDoListPropsInterface {
  todos: ToDoItemInterface[];
  deleteToDo: (id: string) => void;
  toggleToDo: (id: string) => void;
}

export default ToDoListPropsInterface;
