import Button from "./Button";
import { RiCheckDoubleFill, RiDeleteBin2Line } from "react-icons/ri";
import ActionsPropsInterface from "../type/ActionsProps.Interface";

const Actions = ({
  todos,
  deleteAllTodos,
  clearCompletedTodos,
}: ActionsPropsInterface) => {
  const isTodoListEmpty = todos.length === 0;
  const hasCompletedTodos = todos.some((todo) => todo.completed);
  const getTasksLeftMessage = (tasksLeft: number) => {
    if (tasksLeft === 0) {
      return "0 tasks left. Great job!";
    }
    if (tasksLeft === 1) {
      return "1 task left";
    }
    return `${tasksLeft} tasks left`;
  };

  const getTasksCompletedMessage = (tasksCompleted: number) => {
    if (tasksCompleted === 0) {
      return "0 tasks completed. Keep going!";
    }
    if (tasksCompleted === 1) {
      return "1 task completed";
    }
    return `${tasksCompleted} tasks completed`;
  };

  const tasksLeft = todos.filter((todo) => !todo.completed).length;
  const tasksCompleted = todos.filter((todo) => todo.completed).length;

  return (
    <div className="actions">
      <p className={`status-message ${tasksLeft === 0 ? 'success' : 'warning'}`}>{getTasksLeftMessage(tasksLeft)}</p>
      {tasksLeft > 0 && <p className="status-message warning">{getTasksCompletedMessage(tasksCompleted)}</p>}
      <Button
        title="Delete all items"
        onClick={deleteAllTodos}
        disabled={isTodoListEmpty}
      >
        <RiDeleteBin2Line />
      </Button>
      <Button
        title="Delete all completed items"
        onClick={clearCompletedTodos}
        disabled={!hasCompletedTodos}
      >
        <RiCheckDoubleFill />
      </Button>
    </div>
  );
};

export default Actions;
