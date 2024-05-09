import { RiRefreshLine, RiDeleteBin2Line } from 'react-icons/ri';
import Button from './Button';

function TodoActions({ deleteCompletedTodo, resetTodo, completedTodoExist }) {
  return (
    <div className="todoActionsConteiner">
      <Button title="Reset Todos" onClick={resetTodo}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={deleteCompletedTodo}
        disabled={!completedTodoExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
export default TodoActions;
