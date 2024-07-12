import { FaCheck } from "react-icons/fa";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";
import { useContext } from "react";
import { ToDoContext } from "../context/ToDoContext";
import ToDoPropsInterface from "../type/ToDoProps.Interface";

const ToDoItem = ({ todo: { id, title, completed } }: ToDoPropsInterface) => {
  const { deleteToDo, toggleToDo } = useContext(ToDoContext);
  return (
    <div className={`todo-item ${completed ? 'completed' : 'not-completed'}`}>
      <RiTodoFill className="todo-item-icon" />
      <h2 className="todo-item-title">{title}</h2>
      <div className="todo-item-actions">
        <FaCheck className="todo-check-icon" onClick={() => toggleToDo(id)} />
        <RiDeleteBin2Line className="todo-delete-icon" onClick={() => deleteToDo(id)} />
      </div>
    </div>
  );
}

export default ToDoItem;
