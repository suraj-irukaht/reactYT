import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import NavList from './NavList';
import './style.scss';

const Header = () => {
   const [nav, setNav] = useState(false);
   return (
      <>
         <header className={nav ? 'header nav-active' : 'header'}>
            <div className="container">
               <nav className="nav">
                  <Logo />
                  <button
                     className="nav-opener"
                     onClick={() => setNav((nav) => !nav)}
                  >
                     <span></span>
                     <span></span>
                     <span></span>
                  </button>
                  <NavList />
               </nav>
            </div>
         </header>
      </>
   );
};

export default Header;
