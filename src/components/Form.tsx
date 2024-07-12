import {v4 as uuidv4} from 'uuid';
import FormPropsInterface from "../type/FormProps.Interface";
import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./Button";

const Form = ({ addToDo }: FormPropsInterface) => {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToDo({
      id: uuidv4(),
      title,
      completed: false,
    });
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="input-group">
        <input
          type="text"
          id="todo"
          className="input"
          placeholder="Enter new task..."
          value={title}
          onChange={handleInputChange}
        />
        <Button title="Submit task" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
