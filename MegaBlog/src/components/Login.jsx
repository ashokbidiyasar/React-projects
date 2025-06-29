import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn as Store_login } from "../store/features/AuthSlice";
import auth_services from "../appwrite/auth_services/auth_services";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [Error, setError] = useState("");

  const login_process = async (data) => {
    setError("");
    try {
      const session = await auth_services.Login(data);
      if (session) {
        const UserData = await auth_services.getUser_status();
        if (UserData) {
          dispatch(Store_login({ UserData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
      console.log("Error in the Login_page ", error.message);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4">
      <div className="mx-auto w-full max-w-lg bg-white rounded-2xl p-10 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
        <div className="mb-6 flex justify-center">
          <span className="inline-block w-28">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">Sign in to your account</h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Don&apos;t have any account?&nbsp;
          <Link to="/signup" className="font-semibold text-purple-700 hover:underline">
            Sign Up
          </Link>
        </p>

        {Error && <p className="mt-6 text-center text-sm text-red-600">{Error}</p>}

        <form onSubmit={handleSubmit(login_process)} className="mt-6 space-y-5">
          <Input
            label="Email:"
            placeholder="Enter your email"
            type="email"
            {...register("email", {
              required: true,
              validate: {
                matchPatern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) || "Email address must be a valid address",
              },
            })}
          />
          <Input
            label="Password:"
            type="password"
            placeholder="Enter your password"
            {...register("password", {
              required: true,
            })}
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
