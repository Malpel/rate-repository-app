import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignInForm from '../components/SignInForm';
import SignIn from '../components/SignInForm/Signin';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <View >
        <AppBar />
        <Switch>
          <Route exact path='/' >
            <RepositoryList />
          </Route>
          <Route path='/signin/'>
            <SignInForm onSubmit={SignIn} />
          </Route>
          <Redirect to="/" />
        </Switch>
      </View>
    </View>
  );
};

export default Main;