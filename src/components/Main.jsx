import React from 'react';
import { StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import { Route, Switch } from 'react-router-native';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  // switch did not work the way the material implied
  return (
    <View style={styles.container}>
      <View >
        <AppBar />
        <Switch>
          <Route exact path='/' >
            <RepositoryList />
          </Route>
          <Route path='/signin/'>
            <SignIn />
          </Route>
        </Switch>
      </View>
    </View>
  );
};

export default Main;