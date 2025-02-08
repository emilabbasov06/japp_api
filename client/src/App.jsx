import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Companies from "./pages/Companies";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Vacancies from "./pages/Vacancies";
import Dashboard from "./pages/Dashboard";
import Update from "./pages/Update";
import Create from "./pages/Create";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/edit" element={<Update />} />
        <Route path="/create" element={<Create />} />
      </Route>
      <Route path="/vacancies" element={<Vacancies />} />
      <Route path="/companies" element={<Companies />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
