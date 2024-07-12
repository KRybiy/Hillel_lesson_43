import ToDoItemInterface from "./ToDoItem.Interface";

interface ActionsPropsInterface {
  todos: ToDoItemInterface[];
  deleteAllTodos: () => void;
  clearCompletedTodos: () => void;
}

export default ActionsPropsInterface;
