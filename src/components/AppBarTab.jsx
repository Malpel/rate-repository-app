import React from 'react';
import Text from './Text';
import { View } from 'react-native';

const AppBarTab = ({ tabTitle }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text fontWeigh='bold' color='textTab'>{tabTitle}</Text>
    </View>
  );
};

export default AppBarTab;