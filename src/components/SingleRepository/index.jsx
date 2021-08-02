import React from 'react';
import { useParams } from 'react-router-native';
import { View } from 'react-native';

import useSingleRepository from '../../hooks/useSingleRepository';
import ReviewList from './ReviewList';

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { repository } = useSingleRepository(repositoryId);

  return (
    <View style={{ flexGrow: 1, marginBottom: 125 }}>
      {(repository && repository.reviews)
        && <ReviewList reviews={repository.reviews} repository={repository} />}
    </View>
  );
};

export default SingleRepository;