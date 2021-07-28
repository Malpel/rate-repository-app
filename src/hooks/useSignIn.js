import { useMutation } from "@apollo/client";
import { useApolloClient } from '@apollo/client';

import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const [mutate, result] = useMutation(AUTHORIZE);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const signIn = async (username, password) => {
    const { data } = await mutate({ variables: { username: username, password: password } });
    await authStorage.setAccessToken(data.authorize.accessToken);
    apolloClient.resetStore();
  };

  return [signIn, result];
};

export default useSignIn;