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
    paddingRight: 10,
    justifyContent: 'center',
    color: theme.colors.primary,
    borderColor: theme.colors.primary,
  },

  rating: {
    color: theme.colors.primary,
  }
});

const Review = ({ review, reviewActions }) => {
  return (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
      <View style={styles.flexContainer}>
        <View style={styles.icon}>
          <Text style={styles.rating}>{review.rating}</Text>
        </View>

        <View style={styles.flexColumn}>
          <Text style={styles.flexItem}>{review.user.username}</Text>
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