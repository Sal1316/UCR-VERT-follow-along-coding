const typeDefs = `
  # Define which fields are accessiblle from the Class model.
  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  type Student {
    _id: ID

  }

  # Define which queries the fromt end is allowed to make and what data is returned.
  type Query {
    classes: [Class] # entrypoint.
    students: [Student] # returns an array of student objects.
  }
`;

module.exports = typeDefs;


/* NOTES: we added type Student so we can query them too. 



*/ 