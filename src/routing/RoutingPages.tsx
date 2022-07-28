import { useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Login } from '../pages/Login';
import { Navbar } from '../components/Navbar';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const RoutingPages = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ pathname: '/login' });
    }
  }, [navigate, isLoggedIn]);
  return (
    <>
      {isLoggedIn && <Navbar />}
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
