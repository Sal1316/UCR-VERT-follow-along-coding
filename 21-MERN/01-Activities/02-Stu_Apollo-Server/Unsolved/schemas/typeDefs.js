const gql = String.raw; // Changes the syntax highlighting in template literals

const typeDefs = gql`
  # Define which fields are accessible from the Class model.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Student {
    _id: ID
  }

  # Define which queries the front end is allowed to make and what data is returned.
  # the entrypoint is 'classes', 'students' and they return the [Class], [Student] which are arrays of the Class and Studnet objects defined above.
  type Query {
    classes: [Class]
    students: [Student]
  }
`;

module.exports = typeDefs;

/* 
NOTES: 
- typeDefs: Basically difine the schema, the shape of the data that we are working with into an autographql


*/
