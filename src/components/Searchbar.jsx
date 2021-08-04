import React from 'react';
import { Searchbar as PaperSearchbar } from 'react-native-paper';
import { useDebounce } from 'use-debounce';

const Searchbar = ({ setOrder }) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  // cannot understand how this is useful in anyway when the repos are passed
  // down in RepositoryList, no way to make anything useful without useEffect,
  // but that doesn't help with anything either, how the hell do I pass
  // the value to the query? some react context garbage?
  const [value] = useDebounce(searchQuery, 500);

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