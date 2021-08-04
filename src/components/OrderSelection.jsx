import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { View, StyleSheet } from 'react-native';

const OrderSelection = ({ setOrder }) => {
  const [selectedOrder, setSelectedOrder] = useState('');

  const styles = StyleSheet.create({
    picker: {
      height: 75,
      width: '100%',
      flexGrow: 1,
    }
  });

  return (
    <View style={styles.picker}>
      <Picker style={{ flex: 1 }} selectedValue={selectedOrder} onValueChange={(itemValue) => {
        setSelectedOrder(itemValue);
        setOrder(itemValue, '');
      }}>
        <Picker.Item label='Select order...' value='NON_OPTION' enabled={false} />
        <Picker.Item label='Latest repositories' value='CREATED_AT' />
        <Picker.Item label='Highest rated repositories' value='RATING_AVERAGE_DESC' />
        <Picker.Item label='Lowest rated repositories' value='RATING_AVERAGE_ASC' />
      </Picker>
    </View>

  );
};

export default OrderSelection;