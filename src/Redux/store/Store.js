import { configureStore } from '@reduxjs/toolkit'
import todoSlice from '../Features/Todo.slice'
export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
});
