import Todo from './Todo';

function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className="todoListConteiner">
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  );
}
export default TodoList;
