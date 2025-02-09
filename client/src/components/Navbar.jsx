// import React from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';

// const Navbar = () => {
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.removeItem("token");
//     window.location.reload();
//   };


//   return (
//     <header className='container-parent'>
//       <div className='container navbar-parent'>
//         <div>
//           <Link className='link logo bg-text' to='/'>LOGO</Link>
//         </div>
//         <nav>
//           <ul className='navbar'>
//             <li><NavLink className='link' to=''>Home</NavLink></li>
//             <li><NavLink className='link' to='/vacancies'>Vacancies</NavLink></li>
//             <li><NavLink className='link' to='/companies'>Companies</NavLink></li>
//             <li>{localStorage.getItem("token") ? <button className='button' onClick={logout}>Logout</button> : <button className='button' onClick={() => navigate("/login")}>Login</button>}
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for open/close

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Toggle menu open/close
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setMenuOpen(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    closeMenu(); // Close menu after logout
  };

  return (
    <header className="container-parent">
      <div className="container navbar-parent flex items-center justify-between">
        {/* Logo */}
        <Link className="link logo bg-text" to="/" onClick={closeMenu}>LOGO</Link>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop & Mobile Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent md:flex transition-all duration-300 shadow-md md:shadow-none ${menuOpen ? "block" : "hidden"
            }`}
        >
          <ul className="navbar flex flex-col md:flex-row items-center gap-4 p-4 md:p-0">
            <li><NavLink className="link" to="/" onClick={closeMenu}>Home</NavLink></li>
            <li><NavLink className="link" to="/vacancies" onClick={closeMenu}>Vacancies</NavLink></li>
            <li><NavLink className="link" to="/companies" onClick={closeMenu}>Companies</NavLink></li>
            <li>
              {localStorage.getItem("token") ? (
                <button className="button" onClick={logout}>Logout</button>
              ) : (
                <button className="button" onClick={() => { navigate("/login"); closeMenu(); }}>
                  Login
                </button>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
