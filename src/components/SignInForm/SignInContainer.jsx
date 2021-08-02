import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikTextInput from '../FormikTextInput';
import BlueButton from '../BlueButton';

const styles = {
  container: {
    backgroundColor: 'white',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 1,
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

const SignInContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View style={styles.container}>
          <FormikTextInput name="username" placeholder="Username" testID='username' />
          <FormikTextInput name="password" placeholder="Password" secureTextEntry testID='password' />
          <BlueButton text={'Sign in'} onPress={handleSubmit} idForTest={'submitButton'} />
        </View>
      )}
    </Formik>
  );
};

export default SignInContainer;