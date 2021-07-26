import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          ownerName
      	  description
          ownerAvatarUrl
          forksCount
          stargazersCount
          reviewCount
          ratingAverage
          language
        }
      }
    }
  }
`;