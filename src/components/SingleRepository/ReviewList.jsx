import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import RepositoryItem from '../RepositoryList/RepositoryItem';
import Review from './Review';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const ReviewList = ({ reviews, repository, onEndReached }) => {
  const reviewNodes = reviews
    ? reviews.edges.map(edge => edge.node)
    : [];

  return (
    <FlatList
      data={reviewNodes}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryItem item={repository} showGitHubButton={true} />}
      ListFooterComponent={<View style={{height: 20}}/>}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.5}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Review review={item} key={index} />
      )}
    />
  );
};

export default ReviewList;