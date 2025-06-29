import React, { Children } from 'react'
import { useDispatch } from 'react-redux'
import {LogOut} from '../../store/features/AuthSlice'
import auth_services from "../../appwrite/auth_services/auth_services";

function LogoutBtn({classname =''}) {
    const dispatch = useDispatch();

    const HandleLogout=()=>{
        auth_services.Logout()
        .then(()=>{
            dispatch(LogOut());
        })
        .catch((error)=>{
            console.log("Error in HandleLogout in Logout Button",error);
        })
    }


  return (
    <div>
      <button
        className={`${classname} inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full text-lg hover:text-black`}
        onClick={HandleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default LogoutBtn