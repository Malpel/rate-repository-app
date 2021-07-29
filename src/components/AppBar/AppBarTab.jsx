import React from 'react';
import { View } from 'react-native';

import Text from '../Text';


const AppBarTab = ({ tabTitle }) => {
  return (
    <View style={{ padding: 10 }}>
      <Text fontWeigh='bold' color='textTab'>{tabTitle}</Text>
    </View>
  );
};

export default AppBarTab;