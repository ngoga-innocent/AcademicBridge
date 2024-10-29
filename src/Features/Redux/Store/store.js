import { configureStore } from '@reduxjs/toolkit'
import  userSlice  from '../Slice/UserSlice'
import  todoSlice  from '../Slice/TodoSlice'

export default configureStore({
  reducer: {
    Users:userSlice,
    Todos:todoSlice,
  },
})