import HomeForm from './HomeForm';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { Wrapper } from './Right.styles';

/**
 * @desc HomeRight has two views based on loggedIn state. A logged In user views his info while loggedOut user views login/register
 * @returns Login/Register view to unlogged user, Info to logged User
 */
const HomeRight = () => {
  const { isLoggedIn } = useSelector((state: RootState) => state.auth);
  if (!isLoggedIn) {
    return (
      <>
        <HomeForm />
      </>
    );
  }
  return (
    <>
      <Wrapper>Infos about user;</Wrapper>
    </>
  );
};

export default HomeRight;
