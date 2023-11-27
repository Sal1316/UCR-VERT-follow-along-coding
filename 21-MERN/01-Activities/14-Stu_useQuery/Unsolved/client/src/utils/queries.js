import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtAuthor
      thoughtText
      createdAt
    }
  }
`;
