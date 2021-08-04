import React from 'react';
import { Searchbar as PaperSearchbar } from 'react-native-paper';

const Searchbar = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = query => {
    setSearchQuery(query);
  };

  return (
    <PaperSearchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default Searchbar;