const { ObjectID } = require('bson');
const Category = require('../models/Category');
const Product = require('../models/Product');
//const CategoryController = require('../controllers/CategoryController');

class ProductController {

  async create(req, res){
    
    const {title, description, price, categoryId} = req.body;
    var errors = [];

     if(title != undefined && title != ''){
      console.log("Title OK")
    }else{
      errors.push("Invalid Title.");
    }

    if(description != undefined && description != ''){
      console.log("Description OK")
    }else{
      errors.push("Invalid description.");
    }

    if(price != undefined && isNaN(price) == false && price > 0){
      console.log("Price OK")
    }else{
      errors.push("Invalid price.")
    }

    if(categoryId != undefined && categoryId != ''){
      const isCategory = ObjectID.isValid(categoryId);
      
      if(isCategory){
        const category = await Category.findById(categoryId);

        if(category != null){
          console.log("Category OK");
        }else{
          errors.push("Category not found");
        }

      }else{
        errors.push("Invalid category.")
      }

    }
    
    if(errors.length >= 1){
      res.status(400);
      res.json(errors);
    }else{
      const product = await Product.create({
        title: title,
        description: description,
        price: price,
        categoryId: categoryId
      })
      res.status(200);
      res.json(product);
    }

  } 
}

module.exports = new ProductController();