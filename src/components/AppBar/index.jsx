import React from 'react';
import { View, StyleSheet, Pressable, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import { useQuery } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../../theme';
import { AUTHORIZED_USER } from '../../graphql/queries';
import useSignOut from '../../hooks/useSignOut';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.barBackground,
    flexDirection: 'row'
  },
  // ...
});

const AppBar = () => {
  const { data } = useQuery(AUTHORIZED_USER);
  console.log('QUERY RESULT: ', data);

  const signOut = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Pressable>
          <Link to='/'>
            <AppBarTab tabTitle={'Repositories'} />
          </Link>
        </Pressable>

        {(data && data.authorizedUser)
          && <Pressable>
            <Link to='/review'>
              <AppBarTab tabTitle={'Create a review'} />
            </Link>
          </Pressable>}

        {data && data.authorizedUser
          ? <Pressable onPress={signOut}>
            <AppBarTab tabTitle={'Sign out'} />
          </Pressable>

          : <Pressable>
            <Link to='/signin'>
              <AppBarTab tabTitle={'Sign in'} />
            </Link>
          </Pressable>
        }

        {!(data && data.authorizedUser)
          && <Pressable>
            <Link to='/signup'>
              <AppBarTab tabTitle={'Sign up'} />
            </Link>
          </Pressable>}
      </ScrollView>
    </View>
  );
};

export default AppBar;