
import "./App.css";
import Form from "./components/Form";
import ToDoList from "./components/ToDoList";
import ToDoActions from "./components/ToDoActions";
import { ToDoProvider } from "./components/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <Form/>
        <ToDoActions/>
        <ToDoList/>
      </div>
    </ToDoProvider>
  );
}

export default App;
