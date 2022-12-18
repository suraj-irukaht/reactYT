import React from 'react';
import { NavLink } from 'react-router-dom';

const NavList = ({ active }) => {
   return (
      <div className="nav-menu">
         <ul className="unstyled">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/about">About</NavLink>
            </li>
         </ul>
      </div>
   );
};

export default NavList;
