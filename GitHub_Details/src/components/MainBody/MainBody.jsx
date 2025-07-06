import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Left_half from "./Left_half";
import Right_half from "./Right_half";
import { useSelector } from "react-redux";

const MainBody = () => {
  const navigate = useNavigate();
  const userData = useSelector((s) => s.user.UserData);

  useEffect(() => {
    if (!userData || Object.keys(userData).length === 0) {
      navigate("/login");
    }
  }, [userData, navigate]);

  if (!userData || Object.keys(userData).length === 0) return null;

  return (
    <div className="container pt-16 text-white flex">
      <div className="w-[40%]">
        <Left_half />
      </div>
      <div className="w-[60%]">
        <Right_half />
      </div>
    </div>
  );
};

export default MainBody;
