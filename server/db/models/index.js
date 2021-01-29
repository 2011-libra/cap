const User = require('./user');
const Document = require('./document');
const UserDocument = require('./user_document');

User.belongsToMany(Document, { through: 'user_document' });
Document.belongsToMany(User, { through: 'user_document' });

module.exports = {
  User,
  Document,
  UserDocument
};
