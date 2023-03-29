import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { useState } from 'react';

function App() {
  let [todoList, updateTodoList] = useState([
    { id: 1, name: 'Todo 1', date: '2021-07-01' },
    { id: 2, name: 'Todo 2' },
    { id: 3, name: 'Todo 3', date: '2021-07-02', completed: true },
    { id: 4, name: 'Todo 4', completed: true },
  ]);

  const deleteTodoItem = id => {
    updateTodoList(todoList.filter((item) => item.id !== id));
  }

  const toggleTodoStatus = id => {
    updateTodoList(
      todoList.map(
        (item) => item.id === id ?
          { ...item, completed: !item.completed } : item
      )
    )
  }

  const setDate = (id, newDate) => {
    updateTodoList(
      todoList.map(
        (item) => item.id === id ?
          { ...item, date: newDate } : item
      )
    )
  }

  return (
    <div>
      <TodoList todoList={todoList} deleteTodoItem={deleteTodoItem} toggleTodoStatus={toggleTodoStatus} setDate={setDate} />
    </div>
  );
}

export default App;
