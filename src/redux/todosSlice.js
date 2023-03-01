import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const tasksInitialState = [
  // {
  //   id: 0,
  //   title: 'Learn HTML and CSS',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto esse quos, hic voluptatum libero adipisci possimus incidunt tempora corrupti id animi eveniet sapiente culpa ipsam unde! Similique, molestias magni.',
  //   isCompleted: true,
  // },
  // {
  //   id: 1,
  //   title: 'Get good at JavaScript',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto esse quos, hic voluptatum libero adipisci possimus incidunt tempora corrupti id animi eveniet sapiente culpa ipsam unde! Similique, molestias magni.',
  //   isCompleted: true,
  // },
  // {
  //   id: 2,
  //   title: 'Master React',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto esse quos, hic voluptatum libero adipisci possimus incidunt tempora corrupti id animi eveniet sapiente culpa ipsam unde! Similique, molestias magni.',
  //   isCompleted: false,
  // },
  // {
  //   id: 3,
  //   title: 'Discover Redux',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto esse quos, hic voluptatum libero adipisci possimus incidunt tempora corrupti id animi eveniet sapiente culpa ipsam unde! Similique, molestias magni.',
  //   isCompleted: false,
  // },
  // {
  //   id: 4,
  //   title: 'Build amazing apps',
  //   description:
  //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi architecto esse quos, hic voluptatum libero adipisci possimus incidunt tempora corrupti id animi eveniet sapiente culpa ipsam unde! Similique, molestias magni.',
  //   isCompleted: false,
  // },
];

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
