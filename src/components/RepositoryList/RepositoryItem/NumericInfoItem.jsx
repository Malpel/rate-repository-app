import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../Text';
import { numberFormat } from '../../../utils/numberFormat';

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
        <Text fontWeight='bold' testID={name}>{numberFormat(numericInfo)}</Text>
      </View>
      <View style={styles.flexItem}>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

export default NumericInfoItem;