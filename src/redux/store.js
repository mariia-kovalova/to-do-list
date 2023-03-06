import { configureStore } from '@reduxjs/toolkit';
import todos from './todosSlice';

const store = configureStore({
  reducer: {
    todos,
  },
});

export default store;
