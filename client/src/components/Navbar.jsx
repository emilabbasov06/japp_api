import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
    <header className='container-parent'>
      <div className='container navbar-parent'>
        <div>
          <Link className='link logo bg-text' to='/'>LOGO</Link>
        </div>
        <nav>
          <ul className='navbar'>
            <li><NavLink className='link' to=''>Home</NavLink></li>
            <li><NavLink className='link' to='/vacancies'>Vacancies</NavLink></li>
            <li><NavLink className='link' to='/companies'>Companies</NavLink></li>
            <li>{localStorage.getItem("token") ? <button className='button' onClick={logout}>Logout</button> : <button className='button' onClick={() => navigate("/login")}>Login</button>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;