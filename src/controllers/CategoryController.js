const Category = require('../models/Category');

class CategoryController {

  async create(req, res){
    const title = req.body.title

    if(title != undefined && title != ''){
       const category = await Category.create({
        title,
      });
      res.status(200);
      res.json(category);
    }else{
      res.status(400);
      res.json({
        Error: "Título inválido"
      })
    }
  }
  
  /* async findById(req, res){
    const id = req.params.id;

    const category = await Category.findById(id);

    if(category != undefined){
      console.log(category);
      res.status(200);
      res.json(category)
    }else{
      res.status(404);
      res.json({
        Error: "Category not found."
      })
    }

  } */

}

module.exports = new CategoryController();