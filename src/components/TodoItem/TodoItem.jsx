import { useDispatch } from 'react-redux';
import { toggleCompleted } from 'redux/todosSlice';
import { useState } from 'react';
import { Modal } from 'components/Modal';
import PropTypes from 'prop-types';
import css from './TodoItem.module.css';
import { TodoModalInfo } from 'components/TodoModalInfo/TodoModalInfo';

export const TodoItem = ({ todo }) => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const handleToggle = () => dispatch(toggleCompleted(todo.id));

  const handleOpenModal = ({ target }) => {
    if (target.nodeName === 'INPUT') return;
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {todo && (
        <tr className="todo-item" onClick={handleOpenModal}>
          <td>{todo.id}</td>
          <td>{todo.title}</td>
          <td>{todo.description}</td>
          <td>
            <input
              className={css.checkbox}
              type="checkbox"
              checked={todo.isCompleted}
              onChange={handleToggle}
            />
          </td>
        </tr>
      )}
      {showModal && (
        <Modal onCloseModal={handleCloseModal}>
          <TodoModalInfo todo={todo} />
        </Modal>
      )}
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};
