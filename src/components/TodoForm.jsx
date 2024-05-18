import { useState } from 'react';

function TodoForm({ addTodo, todoLength }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className="todoFormConteiner">
      <form className="todoFormConteiner" onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btnForm" title="Submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
export default TodoForm;
