import { memo, useState } from 'react';
import { useUpdateTodoMutation } from 'redux/todosSlice';
import Modal from 'components/Modal/Modal';
import TodoModalInfo from 'components/TodoModalInfo/TodoModalInfo';
import PropTypes from 'prop-types';
import css from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
  const [updateTodo] = useUpdateTodoMutation();
  const [showModal, setShowModal] = useState(false);

  const handleToggle = () => {
    updateTodo({
      id: todo.id,
      isCompleted: !todo.isCompleted,
    });
  };

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
          <TodoModalInfo todoId={todo.id} />
        </Modal>
      )}
    </>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }),
};

export default memo(TodoItem);
