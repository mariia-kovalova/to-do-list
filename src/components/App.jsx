import Form from './Form/Form';
import css from './App.module.css';
import TodoList from './TodoList/TodoList';

const App = () => (
  <div className={css.container}>
    <div className={css.wrap}>
      <Form />
    </div>
    <div className={css.wrap}>
      <TodoList />
    </div>
  </div>
);

export default App;

// let error = null;
// не контрольовані інтупи (form Data, form.reset())
// modal засунуть в модал віндов
