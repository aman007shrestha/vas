import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext, AuthInterface } from '../context/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const { setLogggedInState } = useContext(AuthContext) as AuthInterface;
  const handleLogout = () => {
    localStorage.removeItem('userDetail');
    setLogggedInState({ userName: '', isLoggedIn: false });
    navigate({ pathname: '/login' });
  };
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
