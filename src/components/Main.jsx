import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: theme.colors.mainBackground }}>
        <AppBar />
        <RepositoryList />
      </View>
    </View>
  );
};

export default Main;