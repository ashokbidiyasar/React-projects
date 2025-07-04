import { Use_todo_context} from "../Context/Todo_list";
import { useState,useEffect } from "react";

function Todoitem({ todo }) {

    const {editTodo,deleteTodo,toggleTodo} = Use_todo_context();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [message, setMessage] = useState(todo.message||"");

    useEffect(() => {
      setMessage(todo.message || "");
    }, [todo.message]);

    const update_message = () => {
      if (!message.trim()) return;
      editTodo(todo.id, { ...todo, message: message.trim() });
      setIsTodoEditable(false);
    };
      

  const toggleCompleted = () => {
    toggleTodo(todo.id);
    setIsTodoEditable(false);
   }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input type="checkbox" className="cursor-pointer" checked={todo.completed || false} onChange={toggleCompleted} />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todo.completed ? "line-through" : ""}`}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            update_message();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Todoitem;
