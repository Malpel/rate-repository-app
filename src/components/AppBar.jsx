import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
    flexDirection: 'row'
  },
  // ...
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <AppBarTab tabTitle={'Repositories'} />
          </Link>
        </Pressable>
        <Pressable>
          <Link to='/signin'>
            <AppBarTab tabTitle={'Sign in'} />
          </Link>
        </Pressable>
      </ScrollView>
    </View>
  );
};

export default AppBar;