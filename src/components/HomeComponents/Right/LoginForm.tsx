import { useState } from 'react';
import { Wrapper, Content, FormGroup } from './Right.styles';
import { ShowProps, ICredential } from '../interface';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { logIn } from '../../../features/authentication/authSlice';

const initialCredential = {
  email: '',
  password: '',
};

const LoginForm: React.FC<ShowProps> = ({ setShow }) => {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState<ICredential>(initialCredential);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(logIn(credential));
    toast.success('Hello');
  };

  const handleChange = (e: { target: HTMLInputElement }) => {
    setCredential((credential) => ({
      ...credential,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <Wrapper>
      <Content>
        <h2>Login</h2>
        <form action='' onSubmit={handleSubmit}>
          <FormGroup>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value={credential.email}
              placeholder='Enter your email'
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value={credential.password}
              placeholder='Enter your password'
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <button type='submit' className='btn btn-block login__button'>
              Login
            </button>
          </FormGroup>
          <hr className='form__divider' />
        </form>
        <p>
          Need an account?
          <button
            type='submit'
            className='btn btn-block signup__button'
            onClick={() => setShow(false)}
          >
            Sign up
          </button>
        </p>
      </Content>
    </Wrapper>
  );
};
export default LoginForm;
