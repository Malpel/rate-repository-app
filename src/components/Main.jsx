import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch, Redirect } from 'react-router-native';

import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignInForm from './SignInForm';
import SingleRepository from './SingleRepository';
import ReviewForm from './ReviewForm';
import SignUpForm from './SignUpForm';
import MyReviews from './MyReviews';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
    flex: 1
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
          <Route path='/signin'>
            <SignInForm />
          </Route>
          <Route path='/signup'>
            <SignUpForm />
          </Route>
          <Route path='/review'>
            <ReviewForm />
          </Route>
          <Route path='/myreviews'>
            <MyReviews />
          </Route>
          <Route path='/:repositoryId'>
            <SingleRepository />
          </Route>
          <Redirect to="/" />
        </Switch>
      </View>
    </View>
  );
};

export default Main;