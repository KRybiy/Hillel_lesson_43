import ToDoItem from "./ToDoItem";
import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";

const ToDoList = () => {
  const { todos } = useContext(ToDoContext);
  return (
    <div className="todo-list">
      <h1 className="list-title">Todo List</h1>
      {!todos.length && <p className="no-todos">To do list is empty</p>}
      {todos.map((todo) => (
        <ToDoItem key={todo.id} todo={todo} />
      ))}
      <hr />
    </div>
  );
};

export default ToDoList;
