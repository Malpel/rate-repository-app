import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { useDebounce } from 'use-debounce/lib';
import { useHistory } from 'react-router';

import useRepositories from '../../hooks/useRepository';
import { RepositoryListContainer } from './RepositoryListContainer';

  // this whole thing seems bloated
const RepositoryList = () => {
  const [orderSelection, setOrderSelection] = useState({ orderBy: 'CREATED_AT', direction: 'DESC', searchKeyword: '' });
  const { repositories, fetchMore } = useRepositories(orderSelection.orderBy, orderSelection.direction, orderSelection.searchKeyword);
  const [searchQuery, setSearchQuery] = useState();
  const [value] = useDebounce(searchQuery, 750);
  const history = useHistory();

  const onPress = (repoId) => {
    history.push(`/${repoId}`);
  };

  const setOrder = (itemValue, keyword) => {
    switch (itemValue) {
      case 'RATING_AVERAGE_ASC':
        setOrderSelection({ orderBy: 'RATING_AVERAGE', direction: 'ASC', searchKeyword: '' });
        break;
      case 'RATING_AVERAGE_DESC':
        setOrderSelection({ orderBy: 'RATING_AVERAGE', direction: 'DESC', searchKeyword: '' });
        break;
      case 'SEARCH_KEYWORD':
        setOrderSelection({ ...orderSelection, searchKeyword: keyword });
        break;
      default:
        setOrderSelection({ orderBy: 'CREATED_AT', direction: 'DESC', searchKeyword: '' });
    }
  };

  useEffect(() => {
    setOrder('SEARCH_KEYWORD', value);
  }, [value]);

  const onEndReach = () => {
    fetchMore();
  };

  return (
    <View style={{ marginBottom: 140 }}>
      <RepositoryListContainer repositories={repositories}
        setOrder={setOrder} onPress={onPress}
        searchQuery={searchQuery} setSearchQuery={setSearchQuery}
        onEndReach={onEndReach} />
    </View>
  );
};

export default RepositoryList;