import { useState } from 'react';
import { MOCK_TODOS } from '../data/mock-todoitems';
import ToDoItemInterface from '../type/ToDoItem.Interface';
import { ToDoProviderPropsInterface } from '../type/ToDoProviderProps.Interface';
import { ToDoContext } from '../context/ToDoContext';


export const ToDoProvider = ({children}: ToDoProviderPropsInterface) => {

  const [todos, setTodos] = useState(MOCK_TODOS as ToDoItemInterface[]);

  const addToDoHandler = (todo: ToDoItemInterface) => {
    setTodos([...todos, todo]);
  };
  const deleteToDoHandler = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleToDoHandler = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id) ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteAllTodosHandler = () => {
    setTodos([]);
  };

  const clearCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  return (
    <ToDoContext.Provider
      value={{
        todos,
        addToDo: addToDoHandler,
        deleteToDo: deleteToDoHandler,
        toggleToDo: toggleToDoHandler,
        deleteAllTodos: deleteAllTodosHandler,
        clearCompletedTodos: clearCompletedTodosHandler
      }}
    >
      {children}
    </ToDoContext.Provider>
  )
}
