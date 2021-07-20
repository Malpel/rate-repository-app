import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const RepositoryItem = ({ item }) => {

  const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });

  return (
    <View>
      <Image
        style={styles.logo}
        source={{
          uri: item.ownerAvatarUrl
        }} />
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Forks: {item.forkCount}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
    </View>


  );
};

export default RepositoryItem;