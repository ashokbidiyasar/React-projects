import React ,{useState}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo,editTodo } from '../features/Slices/TodoSlice'

const Todo_shape = () => {
  const todos =  useSelector(state =>state.todos)
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [text, setText] = useState("");

  
  return (
    <div className="flex rounded-md ">
      <ul className="flex w-[400px] flex-col">
        {todos.map((todo) => {
          const isEditing = editingTodoId === todo.id;

          return (
            <li className="flex w-full my-1 py-1 px-1 bg-white" key={todo.id}>
              <input
                type="text"
                readOnly={!isEditing}
                className="w-[320px] h-[40px] font-semibold px-2 py-1 rounded-md outline-none text-black bg-gray-400"
                value={isEditing ? text : todo.message}
                onChange={(e) => setText(e.target.value)}
              />

              <button
                className="px-2"
                onClick={() => {
                  if (todo.completed) return;

                  if (isEditing) {
                    dispatch(editTodo({ id: todo.id, message: text }));
                    setEditingTodoId(null); // exit edit mode
                  } else {
                    setEditingTodoId(todo.id); // enter edit mode
                    setText(todo.message); // preload existing message
                  }
                }}
                disabled={todo.completed}
              >
                {isEditing ? "📁" : "✏️"}
              </button>

              <button className="px-2" onClick={() => dispatch(removeTodo(todo.id))}>
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Todo_shape