import { useMutation } from "@apollo/client";

import { CREATE_USER } from "../graphql/mutations";

const useSignUp = () => {
  const [mutate, result] = useMutation(CREATE_USER);

  const createUser = async (username, password) => {
    const user = await mutate({ variables: { username: username, password: password } });
    return user;
  };

  return [createUser, result];
};

export default useSignUp;