import React from 'react';
import { View, StyleSheet } from 'react-native';
import NumericInfoItem from './NumericInfoItem';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row'
  }
});


const RepositoryNumericInfo = ({ forks, stars, rating, reviews }) => {
  return (
    <View style={styles.flexContainer}>
      <NumericInfoItem name={'Stars'} numericInfo={stars} />
      <NumericInfoItem name={'Forks'} numericInfo={forks} />
      <NumericInfoItem name={'Reviews'} numericInfo={reviews} />
      <NumericInfoItem name={'Rating'} numericInfo={rating} />
    </View>
  );
};

export default RepositoryNumericInfo;