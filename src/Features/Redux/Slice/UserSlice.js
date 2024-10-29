import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: {},
  },
  reducers: {
    GetUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { GetUsers } = userSlice.actions;

// Export the reducer to use in the store
export default userSlice.reducer;
