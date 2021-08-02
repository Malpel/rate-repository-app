import { useHistory } from 'react-router-native';

import useSignIn from '../../hooks/useSignIn';

const SignIn = () => {
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

  return onSubmit;
};

export default SignIn;