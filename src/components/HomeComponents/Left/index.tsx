import { Wrapper, Content } from './Left.styles';

/**
 *
 * @returns Info about platform to user, Stats to admin based on isAdmin boolean
 */
const HomeLeft = () => {
  return (
    <Wrapper>
      <Content>
        <h1>
          VAS <div className='title__small'>Doing Vaccination Right</div>
        </h1>
        <p>
          A startup company that focuses on providing vaccines received from
          internation Aid. We want a conveninet platform for Nepalese to
          Register and Get vaccinated.
        </p>
        <ul>
          <li>How to VAS?</li>
          <li>Register to the platform</li>
          <li>Login to the platform</li>
          <li>Make patient registration</li>
          <li>Book Apppointment</li>
          <li>Get vaccinated</li>
        </ul>
      </Content>
    </Wrapper>
  );
};

export default HomeLeft;
