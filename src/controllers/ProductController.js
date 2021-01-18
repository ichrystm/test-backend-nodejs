const { ObjectID } = require('bson');
const Category = require('../models/Category');
const Product = require('../models/Product');

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

  async get(req, res){
    const products = await Product.find()
    if(products.length >= 1){
      res.status(200);
      res.json(products);
    }else{
      res.status(404)
      res.json({
        Erro: "Nenhum produto encontrado."
      })
    }
  }

  async edit(req, res){
    const { productId, title, description, price, categoryId } = req.body;
    const isCategory = await ObjectID.isValid(categoryId);


    if(title == null || description == null || price == null || isNaN(price) == true || categoryId == null || isCategory == false){
      res.status(400);
      res.json({
        Error: "Invalid fields"
      })

    }else{

    const isProductId = await ObjectID.isValid(productId);
    if(isProductId == true){
    const product = await Product.findById(productId);
    const category = await Category.findById(categoryId);
    if(product != null){

      if(category == null){
        res.status(404);
        res.json({
          Error: "Category not found."
        })
        return;
      }

      const updatedProduct = await Product.updateOne(
        {_id: productId},
        {
          title: title,
          description: description,
          price: price,
          category: category
        }
      )

      res.status(200);
      res.json({Message: `Product id ${productId} updated sucessfull.`});

    }else{
      res.status(204);
      res.json({
        Error: "Product not found"
      })
    }
    
    }else{
      res.status(400);
      res.json({
        Error: "Invalid product"
      })
    }

    }
  }

}

module.exports = new ProductController();