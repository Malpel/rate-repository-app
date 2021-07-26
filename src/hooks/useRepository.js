import { useQuery } from "@apollo/client";

import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network'
  });

  // some very weird behavior with this one
  // when starting the application data does not have the repositories property,
  // but when removed and reloaded, it complains that it is now missing,
  // and writing data.repositories again and reloading makes the app work
  const repositories = data.repositories;

  return { repositories, loading, error };
};

export default useRepositories;