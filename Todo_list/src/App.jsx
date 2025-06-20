import "./App.css";
import TodoForm from "./Components/TodoForm";
import Todoitem from "./Components/Todoitem";
import { Use_todo_context, Todo_list, Todo_list_provider } from "./Context/Todo_list";
import { useEffect, useState } from "react";

function App() {
  // Initialize state with data from localStorage if it exists
  const [Todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("Todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
    //Here we are using a function to initialize the state, which allows us to read from localStorage only once when the component mounts.
    //earlier we were using useEffect to read from localStorage, but that would cause the state to be set after the initial render, leading to potential issues with rendering.
    //our data was not being available immediately, which could cause problems with rendering the Todo items.
  });

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now(), ...todo }, ...prevTodos]);
  };

  const editTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((each_todo) => (each_todo.id === id ? { ...each_todo, ...updatedTodo } : each_todo))
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((each_todo) => each_todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((each_todo) =>
        each_todo.id === id ? { ...each_todo, completed: !each_todo.completed } : each_todo
      )
    );
  };

  // Update localStorage whenever Todos change
  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  return (
    <>
      <Todo_list_provider value={{ Todos, editTodo, addTodo, deleteTodo, toggleTodo }}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
            <div className="mb-4">{<TodoForm />}</div>
            <div className="flex flex-wrap gap-y-3">
              {Todos.map((todo) => {
                return (
                  <div key={todo.id} className="w-full">
                    <Todoitem todo={todo} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Todo_list_provider>
    </>
  );
}

export default App;
