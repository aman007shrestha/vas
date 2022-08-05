import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../../features/authentication/authSlice';
import { Wrapper, Content, NavLeft, NavRight } from './Navbar.styles';

/**
 *
 * @returns Navigation View
 */
const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logOut());
    navigate({ pathname: '/' });
  };

  return (
    <Wrapper>
      <Content>
        <NavLeft>VAS</NavLeft>
        <NavRight>
          <Link to='/' className='nav__link'>
            Home
          </Link>
          <Link to='/create-patient' className='nav__link'>
            Register
          </Link>
          <Link to='/create-patient' className='nav__link'>
            Appointment
          </Link>
          <button onClick={handleLogout} className='logout__btn'>
            Logout
          </button>
        </NavRight>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
