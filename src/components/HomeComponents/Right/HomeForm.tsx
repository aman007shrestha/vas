import React, { useState } from 'react';

import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';

/**
 *
 * @returns Login/Register form view based on show state. show bool true returns login view , false returns register view
 */
const HomeForm = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && <LoginForm setShow={setShow} />}
      {!show && <SignUpForm setShow={setShow} />}
    </>
  );
};

export default HomeForm;
