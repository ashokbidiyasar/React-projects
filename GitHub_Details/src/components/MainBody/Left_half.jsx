import React from 'react'
import { useSelector } from 'react-redux';
const Left_half = () => {
    const UserData = useSelector((state)=>state.user.UserData);
    console.log('In the left Half');
    console.log(UserData);
    const Image_url = UserData.avatar_url;
  return (
    <div className="flex flex-col w-full h-full  justify-center items-end">
      <img src={Image_url} alt="Error 404 " className="w-2/5 h-2/5 rounded-[50%]" />
    </div>
  );
}

export default Left_half