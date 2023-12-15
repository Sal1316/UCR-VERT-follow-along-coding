const gql = String.raw;

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

  type Mutation {
    addSchool(name: String!, location: String!, studentCount: Int!): School
    updateClass(name: String!, building: String!, creditHours: Int!): Class
  }
`;

module.exports = typeDefs;

/* Notes:
- the 'Mutation' type defines a single available mutation, addSchool.
  The mutation accepts three arguments (name, location, and studentCount) 
  and returns a newly created School object. 
  As you'd expect, this Book object conforms to the structure that we 
  defined in our schema.


*/
