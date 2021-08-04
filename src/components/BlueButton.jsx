import React from 'react';
import { StyleSheet, Pressable } from 'react-native';

import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    textAlign: 'center',
    height: 40,
    margin: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 5,
  },
  delete: {
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    height: 40,
    margin: 10,
    paddingTop: 10,
    borderRadius: 5,
    padding: 5,
  }
});

const BlueButton = ({ text, onPress, idForTest, deleteButton }) => {
  return (
    <Pressable onPress={onPress} testID={idForTest}>
      <Text style={deleteButton ? styles.delete : styles.languageTag}>{text}</Text>
    </Pressable>
  );
};

export default BlueButton;