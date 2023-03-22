import { useState } from 'react';
import { useAddTodoMutation } from 'redux/todosSlice';
import css from './Form.module.css';

const msg = 'This field is empty';

const Form = () => {
  const [addTodo] = useAddTodoMutation();

  const [error, setError] = useState({
    title: false,
    description: false,
  });

  const handleChange = ({ target: { name, value } }) => {
    value.trim() !== ''
      ? setError(prevState => ({ ...prevState, [name]: false }))
      : setError(prevState => ({ ...prevState, [name]: true }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const todoInfo = {};
    formData.forEach((value, key) => (todoInfo[key] = value.trim()));
    Object.entries(todoInfo).forEach(([key, value]) => {
      if (value === '') {
        setError(prevState => ({ ...prevState, [key]: true }));
      }
    });
    if (!error.title && !error.description) {
      addTodo(todoInfo);
      form.reset();
    }
  };

  const style = error =>
    error ? { borderColor: '#ff0000' } : { borderColor: '#0d0d0d' };

  return (
    <form className={css.todoForm} onSubmit={handleSubmit}>
      <div className={css.wrap}>
        <label htmlFor="title">Title: </label>
        <input
          id="title"
          className={css.todoInput}
          name="title"
          placeholder="Enter title"
          type="text"
          onChange={handleChange}
          style={style(error.title)}
        />
        {error.title && (
          <p className={css.error} role="alert">
            {msg}
          </p>
        )}
      </div>

      <div className={css.wrap}>
        <label htmlFor="description">Description: </label>
        <input
          id="description"
          className={css.todoInput}
          name="description"
          placeholder="Enter description"
          type="text"
          onChange={handleChange}
          style={style(error.description)}
        />
        {error.description && (
          <p className={css.error} role="alert">
            {msg}
          </p>
        )}
      </div>

      <button className={css.todoBtn} type="submit">
        Create
      </button>
    </form>
  );
};

export default Form;
