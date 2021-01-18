const mongoose = require('../database/database');

const User = mongoose.model('User', {
 nome: {
   type: String,
   required: true,
 },
 email: {
   type: String,
   required: true, 
   unique: true,
 },
 password: {
   type: String,
   required: true,
 }
})

module.exports = User;