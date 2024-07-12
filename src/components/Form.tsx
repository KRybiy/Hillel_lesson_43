import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, useContext, useState } from 'react';
import Button from './Button';
import { ToDoContext } from '../context/ToDoContext';

const Form = () => {
  const { addToDo } = useContext(ToDoContext);
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) {
      return;
    }
    addToDo({
      id: uuidv4(),
      title: title.trim(),
      completed: false,
    });
    setTitle('');
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
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
        <Button title="Submit task" type="submit" disabled={!title.trim()}>
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
