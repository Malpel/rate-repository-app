import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '../Button';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  flexItem: {
    flexGrow: 1
  }
});

const ReviewActions = ({ repo, viewRepository, review, deleteReview }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexItem}>
        <Button text={'View repository'} onPress={() => viewRepository(repo)} />
      </View>
      <View style={styles.flexItem}>
        <Button text={'Delete review'} deleteButton={true} onPress={() => deleteReview(review)} />
      </View>
    </View>
  );
};

export default ReviewActions;