import React from 'react'
import { Link,Navigate } from 'react-router-dom';

const Header = () => {

  return (
    <div className="fixed top-0 left-0 w-full h-16 flex items-center justify-around bg-gray-700 text-lg text-white z-20">
      <div className="w-1/2 font-semibold text-white my-2 mx-6 py-1">
        <p className="px-10">Name</p>
      </div>

      <div className=" font-semibold text-white flex  my-2 py-1 ">
        <ul className="flex items-center space-x-10">
          <li className="on_hover">
            <Link to="/Repositories" className="underline-none cursor-pointer">
              Repositories
            </Link>
          </li>

          <li className="on_hover">
            <Link to="/" className="underline-none cursor-pointer">
              Home
            </Link>
          </li>

          <li className="on_hover">
            <Link to="/login" className="underline-none cursor-pointer">
              Git Hub
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header