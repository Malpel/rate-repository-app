import React from 'react';
import Text from './Text';
import { View } from 'react-native';

const AppBarTab = ({ tabTitle }) => {
  return (
    <View>
      <Text color='textTab'>{tabTitle}</Text>
    </View>
  );
};

export default AppBarTab;