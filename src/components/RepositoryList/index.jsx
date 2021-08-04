import React, { useState } from 'react';
import { View } from 'react-native';

import useRepositories from '../../hooks/useRepository';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  // ordering stuff seems very stupid
  const [orderSelection, setOrderSelection] = useState({ orderBy: 'CREATED_AT', direction: 'DESC', searchKeyword: '' });
  const { repositories } = useRepositories(orderSelection.orderBy, orderSelection.direction, orderSelection.searchKeyword);

  // ordering stuff seems very stupid
  const setOrder = (itemValue, keyword) => {
    switch (itemValue) {
      case 'RATING_AVERAGE_ASC':
        setOrderSelection({ orderBy: 'RATING_AVERAGE', direction: 'ASC', searchKeyword: '' });
        break;
      case 'RATING_AVERAGE_DESC':
        setOrderSelection({ orderBy: 'RATING_AVERAGE', direction: 'DESC', searchKeyword: '' });
        break;
      case 'SEARCH_KEYWORD':
        console.log('test123: ', keyword);
        setOrderSelection({ ...orderSelection, searchKeyword: keyword });
        break;
      default:
        setOrderSelection({ orderBy: 'CREATED_AT', direction: 'DESC', searchKeyword: '' });
    }
  };

  return (
    <View style={{ marginBottom: 140 }}>
      <RepositoryListContainer repositories={repositories}
        setOrder={setOrder} />
    </View>
  );
};

export default RepositoryList;