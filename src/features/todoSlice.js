import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: []
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return { items: [...state.items, action.payload] };
    },
    clearTodos: () => {
      return { items: [] };
    },
    removeTodo: (state, action) => {
      const index = state.items.indexOf(action.payload);
      const newList = [...state.items];
      newList.splice(index, 1);
      return { items: newList };
    }
  }
});

export const { addTodo, clearTodos, removeTodo } = todoSlice.actions

export default todoSlice.reducer