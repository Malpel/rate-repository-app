import React from 'react';
import { FlatList, View, StyleSheet, Pressable } from 'react-native';

import RepositoryItem from './RepositoryItem';
import RepositoryListHeader from './RepositoryListHeader';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const props = this.props;

    return (
      <RepositoryListHeader setOrder={props.setOrder}
         searchQuery={props.searchQuery} setSearchQuery={props.setSearchQuery} />
    );
  };

  render() {
    const props = this.props;
    // Get the nodes from the edges array
    const repositoryNodes = props.repositories
      ? props.repositories.edges.map(edge => edge.node)
      : [];
    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={this.renderHeader}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Pressable onPress={() => props.onPress(item.id)}>
            <RepositoryItem item={item} key={index} testID="repoItem" showGitHubButton={false} />
          </Pressable>
        )}
      />
    );
  }
}