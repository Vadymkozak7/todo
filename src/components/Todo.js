import { FaCheck } from 'react-icons/fa';
import { RiDeleteBin2Line, RiContactsBook2Fill } from 'react-icons/ri';

function Todo({ todo, deleteTodo, toggleTodo }) {
  return (
    <div className={`${'todo'} ${todo.isCompleted ? 'completedTodo' : ''}`}>
      <RiContactsBook2Fill className="todoIcon" />
      <div className="todoText" onDoubleClick={() => deleteTodo(todo.id)}>
        {todo.text}
      </div>
      <RiDeleteBin2Line
        className="deleteIcon"
        onClick={() => deleteTodo(todo.id)}
      />
      <FaCheck className="checkIcon" onClick={() => toggleTodo(todo.id)} />
    </div>
  );
}
export default Todo;
