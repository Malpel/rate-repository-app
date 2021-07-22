import React from 'react';
import Text from './Text';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  flexItem: {
    flexGrow: 1
  },

  flexColumn: {
    flexDirection: 'column',
    flexGrow: 1
  }
});

const NumericInfoItem = ({ name, numericInfo }) => {
  return (
    <View style={styles.flexColumn}>
      <View style={styles.flexItem}>
        {numericInfo >= 1000
          ? <Text fontWeight='bold'>{Math.round((numericInfo / 1000) * 10) / 10}k</Text>
          : <Text fontWeight='bold'>{numericInfo}</Text>
        }
      </View>
      <View style={styles.flexItem}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default NumericInfoItem;