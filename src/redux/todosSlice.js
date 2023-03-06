import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [];

const todosSlice = createSlice({
  name: 'todos',
  initialState: tasksInitialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ title, description }) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            isCompleted: false,
          },
        };
      },
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted;
          break;
        }
      }
    },
  },
});

export const { addTodo, toggleCompleted } = todosSlice.actions;
export default todosSlice.reducer;
