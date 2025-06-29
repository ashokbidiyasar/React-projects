import React,{useState,useEffect} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { LogIn as Store_login } from '../store/features/AuthSlice'
import auth_services from '../appwrite/auth_services/auth_services'
import {Button,Input,Logo} from './index'
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form'

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {register,handleSubmit} = useForm();
  const [Error, setError] = useState('');

  const login_process = async(data)=>{
    setError("");   
       try {
          const session = await auth_services.Login(data);
          if(session){
            const UserData = await auth_services.getUser_status()
             if(UserData){
              dispatch(Store_login({UserData}));
              navigate('/');
             }
          }
        } catch (error) {
          setError(error.message);
          console.log("Error in the Login_page ",error.message);
        } 
       
  }
  useEffect(() => {
     login_process();
  }, [])
  

  return (
    <div className="flex items-center justify-center w-full">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link to="/signup" className="font-medium text-primary transition-all duration-200 hover:underline">
            Sign Up
          </Link>
        </p>
        {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}
        <form onSubmit={handleSubmit(login_process)} className="mt-8">
          <div className="space-y-5">
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
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login