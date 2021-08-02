import { useQuery } from "@apollo/client";

import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useSingleRepository = (id) => {
  const { data, error, loading } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network'
  });

  const repository = data ? data.repository : {};

  return { repository, error, loading };
};

export default useSingleRepository;