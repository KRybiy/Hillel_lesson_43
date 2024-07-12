import { FaCheck } from "react-icons/fa";
import ToDoPropsInterface from "../type/ToDoProps.Interface";
import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri";

const ToDoItem = ({ todo: { id, title, completed }, deleteToDo, toggleToDo }: ToDoPropsInterface) => {
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
