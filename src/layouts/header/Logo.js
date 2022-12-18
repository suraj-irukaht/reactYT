import React from 'react';
import { NavLink } from 'react-router-dom';

const Logo = () => {
   return (
      <NavLink to="/" className="brand">
         <div>(=)Ipsum</div>
      </NavLink>
   );
};

export default Logo;
