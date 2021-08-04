import React from 'react';
import { View, Alert } from 'react-native';
import { useHistory } from 'react-router-native';

import useMyReviews from '../../hooks/useMyReviews';
import useDeleteReview from '../../hooks/useDeleteReview';
import MyReviewsContainer from './MyReviewsContainer';

const MyReviews = () => {
  const { myReviews, refetch } = useMyReviews();
  const history = useHistory();
  const { deleteReview } = useDeleteReview();

  const viewRepository = (repositoryId) => {
    history.push(`/${repositoryId}`);
  };

  const deleteReviewOnPress = (reviewId) => {
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Delete", onPress: async () => {
            try {
              await deleteReview(reviewId);
              await refetch();
            } catch (e) {
              console.log(e);
            }
          }
        }
      ]
    );
  };

  return (
    <View>
      <MyReviewsContainer myReviews={myReviews} viewRepository={viewRepository}
        deleteReview={deleteReviewOnPress} />
    </View>
  );
};

export default MyReviews;