import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const SharedLayout = () => {
   return (
      <>
         <div className="wrapper">
            <Header />
            <main>
               <Outlet />
            </main>
            <Footer />
         </div>
      </>
   );
};

export default SharedLayout;
