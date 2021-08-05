import React from 'react';
import { View, StyleSheet } from 'react-native';
import { format } from 'date-fns';

import Text from '../Text';
import theme from '../../theme';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },

  flexColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'wrap'
  },

  flexItem: {
    flexGrow: 1,
    flexDirection: 'row',

  },

  icon: {
    flexGrow: 0,
    marginRight: 10,
    justifyContent: 'center',
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
    borderWidth: 3,
    borderRadius: 25,
    width: 50,
    height: 50,

  },

  rating: {
    color: theme.colors.primary,
    textAlign: 'center'
  }
});

const Review = ({ review, reviewActions, myReview }) => {
  return (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
      <View style={styles.flexContainer}>
        <View style={styles.icon}>
          <Text fontWeight='bold' style={styles.rating}>{review.rating}</Text>
        </View>

        <View style={styles.flexColumn}>
          {
            myReview
              ?  <Text fontWeight='bold' style={styles.flexItem}>{review.repository.fullName}</Text>
              : <Text fontWeight='bold' style={styles.flexItem}>{review.user.username}</Text>
          }
          <Text style={styles.flexItem}>{format(new Date(review.createdAt), 'dd.MM.yyyy')}</Text>

          <View style={styles.flexItem}>
            <Text style={{
              flex: 1,
              flexWrap: 'wrap'
            }}>{review.text}</Text>
          </View>
        </View>
      </View>
      {reviewActions}
    </View >
  );
};

export default Review;