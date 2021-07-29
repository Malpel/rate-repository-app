import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import { useHistory } from 'react-router-native';

import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryListContainer = ({ repositories }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map(edge => edge.node)
    : [];

  const history = useHistory();

  const onPress = (repoId) => {
    history.push(`/${repoId}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Pressable onPress={() => onPress(item.id)}>
          <RepositoryItem item={item} key={index} testID="repoItem" showGitHubButton={false} />
        </Pressable>
      )}
    />
  );
};

export default RepositoryListContainer;

