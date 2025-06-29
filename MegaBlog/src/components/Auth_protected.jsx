import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Auth_protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    // Wait until authStatus is determined (not undefined/null)
    if (authStatus === undefined || authStatus === null) return;

    if (authentication && !authStatus) {
      navigate("/login", { replace: true });
    } else if (!authentication && authStatus) {
      navigate("/", { replace: true });
    } else {
      setLoader(false);
    }
  }, [authStatus, navigate, authentication]);

  return loader ? <h1 className="text-center mt-10 text-xl font-semibold">Loading...</h1> : <>{children}</>;
}
