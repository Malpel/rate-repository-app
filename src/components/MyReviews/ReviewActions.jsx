import React from 'react';
import { View, StyleSheet } from 'react-native';

import BlueButton from '../BlueButton';

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
        <BlueButton text={'View repository'} onPress={() => viewRepository(repo)} />
      </View>
      <View style={styles.flexItem}>
        <BlueButton text={'Delete review'} deleteButton={true} onPress={() => deleteReview(review)} />
      </View>
    </View>
  );
};

export default ReviewActions;