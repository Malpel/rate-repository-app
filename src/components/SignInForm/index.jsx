import React from 'react';
import { useHistory } from 'react-router';

import SignInContainer from './SignInContainer';
import useSignIn from '../../hooks/useSignIn';

const SignInForm = () => {
  const [signIn] = useSignIn();
  const history = useHistory();
  
  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await signIn(username, password);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInContainer onSubmit={onSubmit} />
  );
};

export default SignInForm;