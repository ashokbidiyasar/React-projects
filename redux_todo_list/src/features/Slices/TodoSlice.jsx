
import { createSlice,nanoid } from '@reduxjs/toolkit';


const initialState ={
    todos: [],
}

const todosSlice = createSlice({
    name : 'todos',
    initialState,
    reducers : {
        addTodo :(state,action)=>{
                const newTodo = {
                    id : nanoid(),
                    message : action.payload,
                    completed : false
                }
                state.todos.push(newTodo);
        },
        removeTodo :(state,action)=>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },

        editTodo:(state,action)=>{
                const {id,message} = action.payload;
                state.todos = state.todos.map((todo)=> todo.id===id?{...todo,message}:todo);
        }
   
    }
})

export const{addTodo,removeTodo,editTodo} = todosSlice.actions;
export default todosSlice.reducer;
// The above code defines a Redux slice for managing a todo list.