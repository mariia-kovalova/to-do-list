import PropTypes from 'prop-types';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from 'redux/todosSlice';
import css from './TodoModalInfo.module.css';

const TodoModalInfo = ({ todoId }) => {
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(todoId);
  const [updateTodo] = useUpdateTodoMutation();

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      isCompleted: !todo.isCompleted,
    });
  };

  return (
    <>
      {!isLoading && todo && (
        <div className={css.wrap}>
          <h2>{todo.title}</h2>
          <p>Description:</p>
          <p>{todo.description}</p>
          <div className={css.status}>
            <label htmlFor="status">Status: </label>
            <input
              className={css.checkbox}
              id="status"
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleToggle}
            />
          </div>
        </div>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Sorry, something went wrong...</div>}
    </>
  );
};

TodoModalInfo.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default TodoModalInfo;
