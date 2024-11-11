import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../components/NavBar';
import Footer from '../components/Footer';

function Layout() {
  return (
    <>
      <Navigation />
      <main id="content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;