import React from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Companies from './pages/Companies';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Vacancies from './pages/Vacancies';
import Dashboard from './pages/Dashboard';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;