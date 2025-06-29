import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn as Store_login } from "../store/features/AuthSlice";
import auth_services from "../appwrite/auth_services/auth_services";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [Error, setError] = useState("");

  const SignUp_process = async (data) => {
    setError("");
    try {
      const User_Created = await auth_services.create_account({
        email: data.email,
        password: data.password,
        name: data.name,
      });

      if (User_Created) {
        const UserData = await auth_services.getUser_status();
        if (UserData) {
          dispatch(Store_login({ UserData }));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
      console.log("Error in SignUp_page", error);
    }
  };

  return (
    <div className=" w-[400px] flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl p-10 shadow-[0_10px_25px_rgba(0,0,0,0.3)]">
        <div className="mb-2 flex justify-center">
          <Logo width="130px" />
        </div>

        <h2 className="text-center text-2xl font-bold text-gray-900">Create your account</h2>

        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?&nbsp;
          <Link to="/login" className="font-semibold text-purple-700 hover:underline">
            Sign In
          </Link>
        </p>

        {Error && <p className="mt-6 text-center text-sm text-red-600">{Error}</p>}

        <form onSubmit={handleSubmit(SignUp_process)} className="mt-6 space-y-5">
          <Input label="Full Name:" placeholder="Enter your full name" {...register("name", { required: true })} />
          <Input
            label="Email:"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || "Enter a valid email address",
              },
            })}
          />
          <Input
            label="Password:"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          <Button type="submit" className="w-full">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
