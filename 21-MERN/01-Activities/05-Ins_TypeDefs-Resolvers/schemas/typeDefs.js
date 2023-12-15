const gql = String.raw;

const typeDefs = gql`
  type School {
    _id: ID
    name: String
    location: String
    studentCount: Int
    # Add a queryable field to retrieve an array of Class objects
    classes: [Class]
  }

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
    # Add a queryable field to retrieve a single Professor object. Here we used the Professor data type to extablish a relationship between 'Class' and 'Professor'
    professor: Professor
  }

  # Define what can be queried for each professor
  type Professor {
    _id: ID
    name: String
    officeHours: String
    officeLocation: String
    studentScore: Float
  }

  # the Query, defines the entry points for the application.
  type Query {
    schools: [School]
    classes: [Class]
    professors: [Professor]
  }
`;

module.exports = typeDefs;
