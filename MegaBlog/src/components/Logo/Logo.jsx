import React from "react";
import blog from "../../blog.png";

function Logo({ width = "200px" }) {
  return (
    <div style={{ width }} className="h-[50px]">
      <img src={blog} alt="logo" className="w-full h-full object-contain" />
    </div>
  );
}

export default Logo;
