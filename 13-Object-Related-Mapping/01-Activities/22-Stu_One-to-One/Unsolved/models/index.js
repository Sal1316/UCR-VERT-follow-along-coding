const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id', // this links the tables. it is the 
  // TODO: Add a comment describing the functionality of this property
  onDelete: 'CASCADE', // this prop deleted the data even if it has an associated table.
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
module.exports = { Reader, LibraryCard };// Exports the properties.


/* NOTES: 
THis index file is used to reinfoce the relationships and then you export them out. TO WHERE?


*/ 