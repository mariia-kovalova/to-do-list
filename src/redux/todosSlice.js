import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const todoApi = createApi({
  reducerPath: 'todos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://641850a829e7e36438e52bc1.mockapi.io',
  }),
  tagTypes: ['Todos'],
  endpoints: builder => ({
    getTodos: builder.query({
      query: () => '/todos',
      providesTags: ['Todos'],
    }),
    getTodoById: builder.query({
      query: id => `/todos/${id}`,
      providesTags: ['Todos'],
    }),
    addTodo: builder.mutation({
      query: content => ({
        url: '/todos',
        method: 'POST',
        body: { isCompleted: false, ...content },
      }),
      invalidatesTags: ['Todos'],
    }),
    updateTodo: builder.mutation({
      query: info => ({
        url: `/todos/${info.id}`,
        method: 'PUT',
        body: info,
      }),
      invalidatesTags: ['Todos'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useGetTodoByIdQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
} = todoApi;
