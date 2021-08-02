import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import BlueButton from '../BlueButton';

const initialValues = {
  username: '',
  password: '',
  passwordConfirm: ''
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required').min(1).max(30),
  password: yup.string().required('Password is required').min(5).max(50),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Passwords don\'t match').required('Password confirmation is required')
});

const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name='username' placeholder='Username' />
          <FormikTextInput name='password' placeholder='Password' secureTextEntry />
          <FormikTextInput name='passwordConfirm' placeholder='Confirm password' secureTextEntry/>
          <BlueButton text='Sign up' onPress={handleSubmit}/>
        </View>
      )}
    </Formik>
  );
};

export default SignUpContainer;