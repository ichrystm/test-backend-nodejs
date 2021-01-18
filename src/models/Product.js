const mongoose = require('../database/database');

const Product = mongoose.model('Product', {
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Category',
  }

})

module.exports = Product;