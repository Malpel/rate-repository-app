import { useQuery } from "@apollo/client";

import { AUTHORIZED_USER } from "../graphql/queries";

const useMyReviews = () => {
  const { data, refetch } = useQuery(AUTHORIZED_USER, 
    {
      fetchPolicy: 'cache-and-network',
      variables: { includeReviews: true }
    });

  const myReviews = (data && data.authorizedUser) ? data.authorizedUser.reviews : { edges: [] };

  return { myReviews, refetch };
};

export default useMyReviews;