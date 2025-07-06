import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { UserData_update, Repos } from "../store/UserSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const base_url = "https://api.github.com/users/";
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    const stored = localStorage.getItem("User");
    setValue(stored && stored !== "null" ? stored : "");
  }, []);

  const onSubmit = async () => {
    const username = value.trim();
    if (!username) {
      alert("Please enter a GitHub username");
      return;
    }

    try {
      const response = await fetch(base_url + username);
      const response2 = await fetch(base_url + username + "/repos");

      if (!response.ok) {
        alert("Please enter a valid GitHub username");
        return;
      }

      const userData = await response.json();
      const repos = response2.ok ? await response2.json() : [];

      dispatch(UserData_update(userData));
      dispatch(Repos(repos));
      localStorage.setItem("User", userData.login);
      navigate("/");
    } catch (error) {
      console.error("Error in the login", error);
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-gray-900 flex justify-center items-center space-y-6">
      <div className="rounded-lg bg-gray-200 text-black w-[400px] h-[200px] flex justify-center items-center flex-col">
        <span className="font-semibold mt-1 mb-2">GitHub Detail</span>

        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter your GitHub username"
          className="w-[80%] py-2 px-2 font-semibold rounded-lg border-[1px] border-gray-500 border-opacity-20 mb-2 mx-2 outline-none"
        />

        <button
          className="rounded-lg bg-blue-500 text-white font-semibold hover:bg-gray-900 px-2 py-2 my-2 w-[80%]"
          onClick={onSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Login;
