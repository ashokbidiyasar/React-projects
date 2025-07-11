import React from 'react'
import { useSelector } from "react-redux";
const Right_half = () => {
    const UserData = useSelector((state)=>state.user.UserData);

  return (
    <div className="w-full h-full flex justify-start items-center">
      <div className="flex flex-col ml-3 space-y-5">
        <div className=" flex text-md flex-wrap mt-3 pl-10  w-full flex-col ">
          {UserData.login !== null && <p className="font-semibold text-2xl mt-2 mb-5">Hi, I'am {UserData.name?UserData.name:UserData.login} </p>}
          <span>{UserData.bio}</span>
          {UserData.company !== null && <p className="text-xl">I work at {UserData.company}</p>}
        </div>

        <div className="flex flex-col text-md flex-wrap mt-3 pl-10  w-full space-y-3 ">
          {UserData.followers !== null && (
            <p className="text-xl text-blue-400/100 ">Followers : {UserData.followers}</p>
          )}

          <div>
            <button className="bg-indigo-600  px-4 py-1 rounded-lg hover:text-[1.26rem]">
              <a href={UserData.html_url} className="underline-none cursor-pointer text-xl transition-all duration-150">
                Visit me
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Right_half