import React from 'react';
import { View , StyleSheet} from 'react-native';

import Searchbar from '../Searchbar';
import OrderSelection from '../OrderSelection';

const RepositoryListHeader = ({ setOrder }) => {
  return (
    <View>
      <Searchbar setOrder={setOrder} />
      <OrderSelection setOrder={setOrder}/>
    </View>
  );
};

export default RepositoryListHeader;