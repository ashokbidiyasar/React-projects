import "./App.css";
import { Header, Footer } from "./components/index";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import auth_services from "./appwrite/auth_services/auth_services";
import { LogIn, LogOut } from "./store/features/AuthSlice";
import { Outlet } from "react-router-dom";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const UserData = await auth_services.getUser_status();

        if (UserData) {
          dispatch(LogIn( {UserData} ));
        } else {
          dispatch(LogOut());
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        dispatch(LogOut());
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, [dispatch]); 

  if (loading) {
    return (
      <div className="bg-gray-400 h-screen w-full flex justify-center items-center">
        <div className="text-2xl font-bold">Loading...</div>
      </div>
    );
  }

  return !loading ? (
    <div className="min-h-screen bg-gray-400 flex flex-col">
      <Header />
      <main className="flex-grow p-4 flex justify-center items-center">
    
          <Outlet />
       
      </main>
      <Footer />
    </div>
  ):null
}

export default App;
