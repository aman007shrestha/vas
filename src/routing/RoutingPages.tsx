import React, { useEffect, useContext } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Navbar } from '../components/Navbar';
import { AuthContext, AuthInterface } from '../context/AuthContext';

export const RoutingPages = () => {
  const navigate = useNavigate();
  const { loggedInState } = useContext(AuthContext) as AuthInterface;
  useEffect(() => {
    const isLoggedIn = loggedInState.isLoggedIn;
    if (!isLoggedIn) {
      navigate({ pathname: '/login' });
    }
  }, [navigate]);
  return (
    <>
      {loggedInState.isLoggedIn && <Navbar />}
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
