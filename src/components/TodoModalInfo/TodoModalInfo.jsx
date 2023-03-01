import { useDispatch } from 'react-redux';
import { toggleCompleted } from 'redux/todosSlice';
import PropTypes from 'prop-types';
import css from './TodoModalInfo.module.css';

export const TodoModalInfo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(todo.id));

  if (todo)
    return (
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
    );
};

TodoModalInfo.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};
