import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { useGetTodoByIdQuery, useUpdateTodoMutation } from 'redux/todosSlice';
import css from './TodoModalInfo.module.css';

const TodoModalInfo = ({ todoId }) => {
  const { data: todo, error, isLoading } = useGetTodoByIdQuery(todoId);
  const [updateTodo, { isLoading: isUpdating }] = useUpdateTodoMutation();

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      isCompleted: !todo.isCompleted,
    });
  };

  return (
    <div className={css.wrap}>
      {isLoading && (
        <div className={css.big_loader_wrap}>
          <Loader color={'#000'} />
        </div>
      )}
      {error && <div>Sorry, something went wrong...</div>}
      {!isLoading && todo && (
        <>
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
            {isUpdating && (
              <div className={css.small_loader_wrap}>
                <Loader color={'#000'} />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

TodoModalInfo.propTypes = {
  todoId: PropTypes.string.isRequired,
};

export default TodoModalInfo;
