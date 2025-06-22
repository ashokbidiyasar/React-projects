import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/Slices/TodoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [input, setinput] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Please enter a todo item");
      return;
    }

    dispatch(addTodo(input));
    e.target.reset(); // Optional: if you use it, you must also reset state
    setinput(""); // Clear input state
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col items-center w-[400px] space-x-2 bg-white rounded-md border shadow-md">
        <form action="submit" className="flex flex-col items-center w-full h-full" onSubmit={handleOnSubmit}>
          <h1 className="text-2xl font-bold text-center mt-4">Add Todo</h1>
          <input
            type="text"
            value={input}
            placeholder="Write Here"
            className="w-[80%] h-[40px] rounded-md border font-semibold mt-4 px-2"
            onChange={(e) => setinput(e.target.value)}
          />
          <button
            type="submit"
            className="w-[80%] h-[40px] text-lg font-semibold bg-blue-500 text-white rounded-md my-5 hover:bg-gray-800"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
