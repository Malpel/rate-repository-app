import React from 'react';
import { useHistory } from 'react-router-native';

import ReviewFormContainer from './ReviewFormContainer';
import useReview from '../../hooks/useReview';

const ReviewForm = () => {
  const [createReview] = useReview();
  const history = useHistory();

  const onSubmit = async (values) => {
    const { repoOwnerName, repositoryName, rating, reviewText } = values;

    try {
      const res = await createReview(repoOwnerName, repositoryName, rating, reviewText);
      history.push(`/${res.data.createReview.repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ReviewFormContainer onSubmit={onSubmit} />
  );
};

export default ReviewForm;