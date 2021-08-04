import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';

import Review from '../SingleRepository/Review';
import ReviewActions from './ReviewActions';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const MyReviewsContainer = ({ myReviews, onEndReached, viewRepository, deleteReview }) => {

  const reviewNodes = myReviews
    ? myReviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListFooterComponent={<View style={{ height: 140 }} />}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Review review={item} key={index} reviewActions={
          <ReviewActions repo={item.repositoryId} viewRepository={viewRepository}
            review={item.id} deleteReview={deleteReview} />
        }
        />
      )}
    />
  );
};

export default MyReviewsContainer;