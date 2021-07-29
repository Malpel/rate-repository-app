import React from 'react';
import { useParams } from 'react-router-native';

import RepositoryItem from '../components/RepositoryList/RepositoryItem';
import useSingleRepository from '../hooks/useSingleRepository';

const SingleRepositoryView = () => {
  const { repositoryId } = useParams();
  const { repository } = useSingleRepository(repositoryId);

  return (
    <RepositoryItem item={repository} showGitHubButton={true}/>
  );
};

export default SingleRepositoryView;