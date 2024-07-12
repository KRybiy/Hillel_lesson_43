import ToDoItemInterface from "./ToDoItem.Interface"

interface ToDoPropsInterface {
  todo: ToDoItemInterface
  deleteToDo: (id: string) => void
  toggleToDo: (id: string) => void
}

export default ToDoPropsInterface