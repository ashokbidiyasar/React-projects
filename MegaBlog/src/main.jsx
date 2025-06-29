import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import { Auth_protected, Login } from "./components/index.js";
import AddPost from "./components/pages/AddPost.jsx";
import Signup from "./components/pages/SignUp_page.jsx";
import EditPost from "./components/pages/EditPost.jsx";
import Post from "./components/pages/Post.jsx";
import AllPost from "./components/pages/AllPost.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <Auth_protected authentication={false}>
            <Login />
          </Auth_protected>
        ),
      },
      {
        path: "/signup",
        element: (
          <Auth_protected authentication={false}>
            <Signup />
          </Auth_protected>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <Auth_protected authentication>
            <AllPost />
          </Auth_protected>
        ),
      },
      {
        path: "/add-post",
        element: (
          <Auth_protected authentication>
            <AddPost />
          </Auth_protected>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <Auth_protected authentication>
            <EditPost />
          </Auth_protected>
        ),
      },
      {
        path: "/post/:slug",
        element: (
          <Auth_protected authentication>
            <Post />
          </Auth_protected>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
