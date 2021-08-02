import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik';
import { View } from 'react-native';

import FormikTextInput from '../FormikTextInput';
import BlueButton from '../BlueButton';

const initialValues = {
  repoOwnerName: '',
  repositoryName: '',
  rating: '',
  reviewText: ''
};

const validationSchema = yup.object().shape({
  repoOwnerName: yup.string().required('Repository owner name is required'),
  repositoryName: yup.string().required('Repository name is required'),
  rating: yup.number().required('Rating is required').min(0).max(100),
  reviewText: yup.string().optional()
});

const ReviewFormContainer = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleSubmit }) => (
        <View>
          <FormikTextInput name='repoOwnerName' placeholder='Repository owner' />
          <FormikTextInput name='repositoryName' placeholder='Repository name' />
          <FormikTextInput name='rating' placeholder='Rating from 0 to 100' keyboardType='numeric' />
          <FormikTextInput name='reviewText' placeholder='Review' multiline />
          <BlueButton text='Create a review' onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

export default ReviewFormContainer;