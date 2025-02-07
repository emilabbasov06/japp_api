import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };


  return (
    <header>
      <div>
        <div className="logo heading">
          <Link className='logo heading' to='/'>LOGO</Link>
        </div>
        <nav>
          <ul>
            <li><NavLink to=''>Home</NavLink></li>
            <li><NavLink to='/vacancies'>Vacancies</NavLink></li>
            <li><NavLink to='/companies'>Companies</NavLink></li>
            <li>{localStorage.getItem("token") ? <button className='button' onClick={logout}>Logout</button> : <button className='button' onClick={() => navigate("/login")}>Login</button>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;