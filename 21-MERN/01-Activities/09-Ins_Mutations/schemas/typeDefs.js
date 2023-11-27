const gql = String.raw; // Changes the syntax highlighting in template literals

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    professor: Professor
  }

  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
    classes: [Class]
  }

  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
    class(id: ID!): Class
  }

  # Define which mutations/changes the client is allowed to make
  type Mutation {
    # Set the required fields for adding new schools.  This will return a new : School which will have the School schema from above
    addSchool(name: String!, location: String!, studentCount: Int!): School
  }
`;

module.exports = typeDefs;
