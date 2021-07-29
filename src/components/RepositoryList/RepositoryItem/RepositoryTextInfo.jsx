import React from 'react';
import { View, StyleSheet } from 'react-native';

import Text from '../../Text';
import theme from '../../../theme';

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },

  flexItem: {
    flexGrow: 1,
    flexDirection: 'row'
  },

  flexColumn: {
    flexDirection: 'column',
    flexGrow: 1,
    flexWrap: 'wrap'
  },

  languageTag: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    alignSelf: 'flex-start',
    borderRadius: 5,
    padding: 5
  }
});

const RepositoryTextInfo = ({ fullName, description, language }) => {
  return (
    <View style={styles.flexColumn}>
      <View style={styles.flexItem}>
        <Text fontWeight='bold' testID='name'>{fullName}</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style={{ flex: 1, flexWrap: 'wrap' }} testID='description'>{description}</Text>
      </View>
      <View style={styles.flexItem}>
        <Text style={styles.languageTag} testID='language'>{language}</Text>
      </View>
    </View>
  );
};

export default RepositoryTextInfo;