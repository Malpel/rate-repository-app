import React from 'react';
import { View  } from 'react-native';

import Searchbar from '../Searchbar';
import OrderSelection from '../OrderSelection';

const RepositoryListHeader = ({ setOrder, searchQuery, setSearchQuery }) => {
  return (
    <View>
      <Searchbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <OrderSelection setOrder={setOrder} />
    </View>
  );
};

export default RepositoryListHeader;