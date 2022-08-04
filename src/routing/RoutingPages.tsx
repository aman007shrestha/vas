import { useEffect } from 'react';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { About } from '../pages/About';
import NavBar from '../components/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import CreatePatient from '../pages/CreatePatient';

/**
 *
 * @returns navigations view based on user loggedIn state, admin navigations view if isAdmin bool true
 *
 */
export const RoutingPages = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  // A non logggedIn user is always redirected to home page
  useEffect(() => {
    if (!isLoggedIn) {
      navigate({ pathname: '/' });
    }
  }, [navigate, isLoggedIn]);
  return (
    <>
      {isLoggedIn && <NavBar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create-patient' element={<CreatePatient />} />
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
