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
import VacancyDetailPage from './pages/VacancyDetailPage';
import CompanyDetailPage from './pages/CompanyDetailPage';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/vacancies' element={<Vacancies />} />
        <Route path='/vacancies/:id' element={<VacancyDetailPage />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/companies/:id' element={<CompanyDetailPage />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;