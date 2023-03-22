import { useGetTodosQuery } from 'redux/todosSlice';
import TodoItem from 'components/TodoItem/TodoItem';
import css from './TodoList.module.css';

const TodoList = () => {
  const { data: todos, error, isLoading } = useGetTodosQuery();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>STATUS</th>
          </tr>
        </thead>
        {todos && todos.length > 0 && !error && (
          <tbody>
            {todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </tbody>
        )}
      </table>
      {isLoading && <div className={css.info}>Loading...</div>}
      {error && (
        <div className={css.info}>Sorry, something went wrong, try again!</div>
      )}
    </>
  );
};

export default TodoList;
