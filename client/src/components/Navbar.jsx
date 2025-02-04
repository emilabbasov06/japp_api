import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className='navbar'>
        <div className="logo"><span>Vakant</span>Az</div>


        <nav>
          <ul>
            <li><NavLink to='/'>Ana səhifə</NavLink></li>
            <li><NavLink to='/companies'>Şirkətlər</NavLink></li>
            <li><NavLink to='/login'>Daxil ol</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;