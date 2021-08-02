import React from 'react';
import { useHistory } from 'react-router';

import SignUpContainer from './SignUpContainer';
import useSignUp from '../../hooks/useSignUp';
import useSignIn from '../../hooks/useSignIn';

const SignUpForm = () => {
  const [createUser] = useSignUp();
  const history = useHistory();
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      await createUser(username, password);
      await signIn(username, password);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignUpContainer onSubmit={onSubmit} />
  );
};

export default SignUpForm;