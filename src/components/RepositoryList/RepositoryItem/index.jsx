import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import RepositoryNumericInfo from './RepositoryNumericInfo';
import RepositoryTextInfo from './RepositoryTextInfo';

const styles = StyleSheet.create({
  logo: {
    width: 66,
    height: 58,
    borderRadius: 5
  },

  flexContainer: {
    flexDirection: 'row',
    flexGrow: 1,
  },

  flexItem: {
    flexGrow: 1,
  },

  icon: {
    flexGrow: 0,
    paddingRight: 10,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={{ padding: 10, backgroundColor: 'white' }}>
      <View style={styles.flexContainer}>
        <View style={styles.icon}>
          <Image
            style={styles.logo}
            source={{
              uri: item.ownerAvatarUrl
            }} />
        </View>

        <View style={styles.flexItem}>
          <RepositoryTextInfo fullName={item.fullName} description={item.description}
            language={item.language} />
        </View>
      </View>

      <RepositoryNumericInfo forks={item.forksCount} stars={item.stargazersCount}
        rating={item.ratingAverage} reviews={item.reviewCount} />
    </View>
  );
};

export default RepositoryItem;