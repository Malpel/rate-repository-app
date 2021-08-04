import { useQuery } from "@apollo/client";

import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useSingleRepository = (id) => {
  const { data, error, loading, fetchMore } = useQuery(GET_REPOSITORY_BY_ID, {
    variables: { repositoryId: id, first: 5 },
    fetchPolicy: 'cache-and-network'
  });

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repository.reviews.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    fetchMore({
      variables: {
        after: data.repository.reviews.pageInfo.endCursor,
        repositoryId: id,
        first: 5
      },
    });
  };

  const repository = data ? data.repository : {};

  return { repository, error, loading, fetchMore: handleFetchMore };
};

export default useSingleRepository;