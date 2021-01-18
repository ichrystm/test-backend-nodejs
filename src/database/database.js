const mongoose = require('mongoose');
const password = 'anotaai123';
const db = 'anotaai';
const uri = `mongodb+srv://ichrystm:${password}@anotaaicluster.mvcdi.mongodb.net/${db}retryWrites=true&w=majority`;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Database connected.');
})

module.exports = mongoose;