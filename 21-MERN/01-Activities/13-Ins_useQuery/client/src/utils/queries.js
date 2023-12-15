// Important for useQuery: We bring in gql from the @apollo/client library to allow us to parse queries (and mutations) as template literals
import { gql } from '@apollo/client';

// Important for useQuery: Each query we'd like to be able to perform gets exported out of our queries.js utility
export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles { # the 'profiles' is what appears in the query in sandbox.
      _id # requesting the _id, name, and skills back.
      name
      skills
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) { # variable name is the $profileId. This is what we input in the botton section of apollo sanbox to return the single profile. 
    profile(profileId: $profileId) { # the 'profile' is what appears in the query in sandbox.
      _id
      name
      skills
    }
  }
`;


/* NOTES:
- the code above is the same queries we were writing in apollo sanbox. We could easily copy and paste those queries in her.

- Why dont these queries go in the typeDefs or resolvers files? Probrably because the otheronse are for testing only.

*/ 