const mongoose = require('../database/database');

const Category = mongoose.model('Category', {
  title: {
    type: String,
    required: true
  }

})

module.exports = Category;