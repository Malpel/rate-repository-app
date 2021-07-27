import React from 'react';
import { View, Pressable } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import Text from './Text';
import FormikTextInput from './FormikTextInput';
import theme from '../theme';
import useSignIn from '../hooks/useSignIn';

const styles = {
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
  },

  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    textAlign: 'center',
    height: 40,
    margin: 10,
    paddingTop: 10,
    borderRadius: 5
  }
};

const initialValues = {
  username: '',
  password: ''
};

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(values);

    try {
      const { data } = await signIn(username, password);
      console.log('data: ', data);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry />

          <Pressable onPress={handleSubmit}>
            <Text style={styles.languageTag}>Sign in</Text>
          </Pressable>
        </View>
      )}

    </Formik>

  );
};

export default SignIn;