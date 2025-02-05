import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <div className="logo heading">
          LOGO
        </div>
        <nav>
          <ul>
            <li><NavLink to=''>Home</NavLink></li>
            <li><NavLink to='/vacancies'>Vacancies</NavLink></li>
            <li><NavLink to='/companies'>Companies</NavLink></li>
            <li><button className='button' onClick={() => navigate('/login')}>Login</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;