const User = require('./User');
const Gallery = require('./Gallery');
const Painting = require('./Painting');

Gallery.hasMany(Painting, { // hasMany means each Gallery can have multiple Paintings associated with it..
  foreignKey: 'gallery_id',
});

Painting.belongsTo(Gallery, { // belongsTo means that each Painting belongs to one Gallery.
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Painting };
