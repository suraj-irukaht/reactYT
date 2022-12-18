import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../header/Logo';
import './style.scss';

const Footer = () => {
   return (
      <>
         <footer className="footer">
            <div className="container">
               <div className="footer-grid">
                  <div className="footer-text">
                     <strong className="heading-sm">About Us</strong>
                     <div>
                        <span>
                           <Logo /> is a free movies streaming website with a
                           big database, lots of great features and beautifuly
                           layout. you can easily find and{' '}
                           <strong>watch movies</strong>, tv shows for free in
                           high qualty without registration.
                        </span>
                     </div>
                  </div>
                  <div className="footer-link-container">
                     <strong className="heading-sm">Link</strong>
                     <div className="footer-links">
                        <div className="footer-link">
                           <ul className="unstyled">
                              <li>
                                 <NavLink>Movies</NavLink>
                              </li>
                              <li>
                                 <NavLink>Tv Shows</NavLink>
                              </li>
                              <li>
                                 <NavLink>Top IMDB</NavLink>
                              </li>
                           </ul>
                        </div>
                        <div className="footer-link">
                           <ul className="unstyled">
                              <li>
                                 <NavLink>Action</NavLink>
                              </li>
                              <li>
                                 <NavLink>Horror</NavLink>
                              </li>
                              <li>
                                 <NavLink>Sci-fi</NavLink>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </footer>
      </>
   );
};

export default Footer;
