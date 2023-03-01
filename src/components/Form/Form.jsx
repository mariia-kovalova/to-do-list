import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/todosSlice';
import css from './Form.module.css';

const msg = 'This field is empty';

export const Form = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDescription, setErrorDescription] = useState(false);
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'title':
        value !== '' ? setErrorTitle(false) : setErrorTitle(true);
        setTitle(value);
        break;
      case 'description':
        value !== '' ? setErrorDescription(false) : setErrorDescription(true);
        setDescription(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const titleValue = e.target.elements.title.value;
    const descriptionValue = e.target.elements.description.value;
    titleValue === '' ? setErrorTitle(true) : setErrorTitle(false);
    descriptionValue === ''
      ? setErrorDescription(true)
      : setErrorDescription(false);
    if (titleValue !== '' && descriptionValue !== '') {
      dispatch(addTodo({ title, description }));
      setTitle('');
      setDescription('');
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
          value={title}
          style={style(errorTitle)}
        />
        {errorTitle && (
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
          value={description}
          style={style(errorDescription)}
        />
        {errorDescription && (
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
