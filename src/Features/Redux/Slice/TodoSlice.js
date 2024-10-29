import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: {},
    overview: false,
    addTodo: false
  },
  reducers: {
    GetTodos: (state, action) => {
      state.todos = action.payload;
    },
    UpdateOverview: (state, action) => {
      state.overview = action.payload;
    },
    UpdateAddTodo: (state, action) => {
      state.addTodo = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { GetTodos, UpdateOverview,UpdateAddTodo } = todoSlice.actions;

// Export the reducer to use in the store
export default todoSlice.reducer;
