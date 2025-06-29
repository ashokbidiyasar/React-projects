import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LogIn as Store_login} from '../store/features/AuthSlice'
import auth_services from "../appwrite/auth_services/auth_services";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const SignUp = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {register,handleSubmit } = useForm();
    const [Error, setError] = useState('')

    const SignUp_process = async (data) => {
      setError("");
      try {
        const User_Created = await auth_services.create_account({
          email: data.email,
          password: data.password,
          name: data.name,
        });

        if (User_Created) {
          const UserData = await auth_services.getUser_status(); // correct method name
          if (UserData) dispatch(Store_login({ UserData: UserData }));
          navigate("/");
        }
      } catch (error) {
        setError(error.message || "Something went wrong");
        console.log("Error in SignUp_page", error);
      }
    };
    

    return (
      <div className="flex items-center justify-center">
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
          <div className="mb-2 flex justify-center">
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
          <p className="my-3 text-center text-base text-black/60">
            Already have an account?&nbsp;
            <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline">
              Sign In
            </Link>
          </p>
          {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}

          <form onSubmit={handleSubmit(SignUp_process)}>
            <div className="space-y-5">
              <Input
                label="Full Name: "
                placeholder="Enter your full name"
                {...register("name", {
                  required: true,
                })}
              />
              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                      "Email address must be a valid address",
                  },
                })}
              />
              <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                })}
              />
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default SignUp;
