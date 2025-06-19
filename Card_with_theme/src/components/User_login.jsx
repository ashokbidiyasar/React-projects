import React from "react";
import { useNavigate } from "react-router-dom";

const User_login = (props) => {
  const { name, setname } = props;
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (name !== "") {
      navigate("/card");
    } else {
      alert("Please Enter your User-Name");
    }
  };

  return (
    <div className="flex justify-center w-full h-screen items-center bg-gray-800">
      <form
        onSubmit={HandleSubmit}
        className="flex flex-col justify-center w-[500px] h-[200px] border bg-gray-200 border-gray-700 rounded-md shadow-lg"
      >
        <label htmlFor="name" className="text-center text-lg font-semibold mb-4 flex flex-col items-center space-y-4">
          <span>Enter Your Git Hub UserName Below</span>
          <input
            className="px-3 w-[300px] py-1 border border-gray-400 rounded-md focus:outline-none"
            type="text"
            placeholder="Enter your UserName"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <button
            type="submit"
            className="bg-gray-600 text-white rounded-md px-4 py-2 cursor-pointer hover:bg-blue-600"
          >
            Submit
          </button>
        </label>
      </form>
    </div>
  );
};

export default User_login;
