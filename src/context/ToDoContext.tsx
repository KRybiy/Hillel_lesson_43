
import { createContext } from 'react';
import { ToDoContextInterface } from '../type/ToDoContext.Interface';
import { initialState } from '../context/initialState';

export const ToDoContext = createContext<ToDoContextInterface>(initialState);