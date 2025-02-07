import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = () => {
  const { auth } = useAuth();

  if (localStorage.getItem('token')) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;
};

export default PrivateRoute;
