import { createSlice } from "@reduxjs/toolkit"


const initialState = [];

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        deleteTodo: (state, action) => {
            console.log(action.payload)
            return state.filter((todo, i) => i !== action.payload)
        },
        updateTodo: (state, action) => {
            state = state.map((todo) =>
                todo.id === action.payload.id ? { ...todo, data: action.payload.data } : todo
            )
        }
    }
})
export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;