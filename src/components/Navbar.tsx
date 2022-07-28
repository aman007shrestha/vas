import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/authentication/authSlice';

export const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('userDetail');
    dispatch(logOut());
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
