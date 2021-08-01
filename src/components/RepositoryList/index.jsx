import React from 'react';
import { View } from 'react-native';

import useRepositories from '../../hooks/useRepository';
import RepositoryListContainer from './RepositoryListContainer';

const RepositoryList = () => {
  const { repositories } = useRepositories();
  return <View style={{ marginBottom: 140 }}><RepositoryListContainer repositories={repositories}/></View>;
};

export default RepositoryList;