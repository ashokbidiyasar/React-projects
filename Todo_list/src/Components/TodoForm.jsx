import { useState } from "react";
import { Use_todo_context } from "../Context/Todo_list";

function TodoForm() {
    const [Todo,setTodo] = useState({});
    const {addTodo} = Use_todo_context();

    const HandleSubmit = (e) => {
      e.preventDefault();

      if (!Todo.message.trim()) return; // Prevent empty todos

      addTodo(Todo);
      setTodo({ message: "", completed: false }); // Reset after adding
    };
  return (
    <form className="flex" onSubmit={HandleSubmit}>
      <input
        type="text"
        placeholder="Write Todo..."
        value={Todo.message || ""}
        onChange={(e) => setTodo((prev)=>({ ...prev, message: e.target.value }))}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
      </button>
    </form>
  );
}

export default TodoForm;
