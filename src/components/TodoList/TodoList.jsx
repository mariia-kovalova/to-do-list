import TodoItem from 'components/TodoItem/TodoItem';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

const TodoList = () => {
  const todos = useSelector(getTodos);
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {todos.length > 0 &&
          todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        <TodoItem />
      </tbody>
    </table>
  );
};

export default TodoList;
