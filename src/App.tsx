import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import { MOCK_TODOS } from "./data/mock-todoitems";
import ToDoItemInterface from "./type/ToDoItem.Interface";
import Actions from "./components/Actions";

function App() {
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
    <div className="container">
      <h1 className="title">ToDo App</h1>
      <Form addToDo={addToDoHandler} />
      <Actions todos={todos} deleteAllTodos={deleteAllTodosHandler} clearCompletedTodos={clearCompletedTodosHandler} />
      <ToDoList todos={todos} deleteToDo={deleteToDoHandler} toggleToDo={toggleToDoHandler} />
    </div>
  );
}

export default App;
