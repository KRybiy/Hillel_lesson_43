import Button from './Button';
import { RiCheckDoubleFill, RiDeleteBin2Line } from 'react-icons/ri';
import { useContext } from 'react';
import { ToDoContext } from '../context/ToDoContext';
import { getTasksLeftMessage, getTasksCompletedMessage } from '../utils/toDoUtils';

const ToDoActions = () => {
  const { todos, deleteAllTodos, clearCompletedTodos } = useContext(ToDoContext);
  const isTodoListEmpty = todos.length === 0;
  const hasCompletedTodos = todos.some((todo) => todo.completed);

  const tasksLeft = todos.filter((todo) => !todo.completed).length;
  const tasksCompleted = todos.filter((todo) => todo.completed).length;

  return (
    <div className="actions">
      <p className={`status-message ${tasksLeft === 0 ? 'success' : 'warning'}`}>
        {getTasksLeftMessage(tasksLeft)}
      </p>
      {tasksLeft > 0 && (
        <p className="status-message warning">{getTasksCompletedMessage(tasksCompleted)}</p>
      )}
      <Button title="Delete all items" onClick={deleteAllTodos} disabled={isTodoListEmpty}>
        <RiDeleteBin2Line className='icon'/>
      </Button>
      <Button
        title="Delete all completed items"
        onClick={clearCompletedTodos}
        disabled={!hasCompletedTodos}
      >
        <RiCheckDoubleFill className='icon' />
      </Button>
    </div>
  );
};

export default ToDoActions;