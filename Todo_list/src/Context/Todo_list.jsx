import { useContext,createContext } from "react";

export const Todo_list = createContext({
    Todos :[
        {
            id:1,
            message:'',
            completed:false
        }
    ],
    editTodo:()=>{},
    addTodo:()=>{},
    deleteTodo:()=>{},
    toggleTodo:()=>{},
});

export const Use_todo_context = ()=>{
    return useContext(Todo_list);
}

export const Todo_list_provider = Todo_list.Provider;