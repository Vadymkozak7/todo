import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';
import TodoActions from '../components/TodoActions';

export function Home() {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo },
      ),
    );
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted));
  };

  const completedTodoCount = todos.filter((todo) => todo.isCompleted).length;

  return (
    <div className="App">
      <header className="header">Login</header>
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 ? (
        <TodoActions
          resetTodo={resetTodoHandler}
          deleteCompletedTodo={deleteCompletedTodoHandler}
          completedTodoExist={!!completedTodoCount}
        />
      ) : (
        ''
      )}
      <TodoList
        todos={todos}
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
      />
      {completedTodoCount > 0 && (
        <h2>{`You have completed ${completedTodoCount} ${
          completedTodoCount > 1 ? `todos` : `todo`
        }`}</h2>
      )}
    </div>
  );
}
