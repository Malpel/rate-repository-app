import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query {
    repositories {
      edges {
        node {
          id
          fullName
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

export const AUTHORIZED_USER = gql`
  query {
    authorizedUser {
      id
      username
    }
  }
`;

export const GET_REPOSITORY_BY_ID = gql`
  query GetRepositoryById($repositoryId: ID!) {
    repository(id: $repositoryId) {
      fullName
      description
      ownerAvatarUrl
      forksCount
      stargazersCount
      reviewCount
      ratingAverage
      language
      url
    }
  }
`;