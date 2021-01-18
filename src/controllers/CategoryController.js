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

}

module.exports = new CategoryController();