import React from 'react'
import {Link,useNavigate} from 'react-router-dom';
import {  Container, Logo } from "../index";
import { useSelector } from 'react-redux';
import LogoutBtn from './LogoutBtn'
const Header = () => {
  const navigate = useNavigate();

  const authStatus = useSelector((state) => state.auth.status);
  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className="py-3 shadow bg-[#1E1E2F] font-md font-semibold text-white">
      <Container>
        <nav className="flex items-center justify-center">
          <div className="mr-4">
            <Link to="/">
              <Logo width="130px" />
            </Link>
          </div>
          <ul className="flex ml-auto items-center">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full hover:text-black text-md"
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );

}
// Up there in mapping we using () instead of the {} because we in () we don't have to return something

export default Header