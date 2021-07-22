import React from 'react';
import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

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

const onSubmit = () => {
  console.log('Submitting info');
};

const SignIn = () => {
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