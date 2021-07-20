import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground
    // ...
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <AppBarTab tabTitle={'Repositories'} />
      </Pressable>
    </View>
  );
};

export default AppBar;