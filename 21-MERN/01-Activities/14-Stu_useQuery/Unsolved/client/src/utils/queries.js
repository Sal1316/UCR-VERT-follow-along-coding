import { gql } from "@apollo/client";

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts { #thoughts endpoint
      _id
      thoughtAuthor
      thoughtText
      createdAt
    }
  }
`;
