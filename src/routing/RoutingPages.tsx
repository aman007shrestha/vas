import React, { useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Navbar } from '../components/Navbar';

export const RoutingPages = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userName = localStorage.getItem('username');
    if (!userName) {
      navigate({ pathname: '/login' });
    }
  }, [navigate]);
  return (
    <>
      {localStorage.getItem('username') && <Navbar />}
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route
          path='*'
          element={
            <h1>
              Page Under Construction!!! Meanwhile visit{' '}
              <Link to='/login'>Login</Link>{' '}
            </h1>
          }
        />
      </Routes>
    </>
  );
};
