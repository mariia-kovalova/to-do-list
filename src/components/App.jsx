import { Form } from './Form';
import css from './App.module.css';
import { TodoList } from './TodoList';

export const App = () => (
  <div className={css.container}>
    <div className={css.wrap}>
      <Form />
    </div>
    <div className={css.wrap}>
      <TodoList />
    </div>
  </div>
);
