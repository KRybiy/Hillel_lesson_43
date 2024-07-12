import ToDoItem from "./ToDoItem";
import ToDoListPropsInterface from "../type/ToDoListProps.Interface";

const ToDoList = ({ todos, deleteToDo, toggleToDo }: ToDoListPropsInterface) => {
  return (
    <div className="todo-list">
      <h1 className="list-title">Todo List</h1>
      {!todos.length && <p className="no-todos">To do list is empty</p>}
      {todos.map((todo) => (
        <ToDoItem key={todo.id} deleteToDo={deleteToDo} toggleToDo={toggleToDo} todo={todo} />
      ))}
      <hr />
    </div>
  );
};

export default ToDoList;
