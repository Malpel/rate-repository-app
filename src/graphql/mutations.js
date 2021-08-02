import { gql } from '@apollo/client';

export const AUTHORIZE = gql`
  mutation Authorize($username: String!, $password: String!) {
    authorize(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($repoOwnerName: String!, $repositoryName: String!,
    $rating: Int!, $reviewText: String) {
      createReview(review: { ownerName: $repoOwnerName, repositoryName: $repositoryName,
      rating: $rating, text: $reviewText }) {
        id
        user {
          id
          username
        }
        repository {
          id
        }
        userId
        repositoryId
        rating
        createdAt
        text
      }
  }
`;