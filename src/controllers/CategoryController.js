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

  async get(req, res){
    const categories = await Category.find()
    if(categories.length >=1){
      res.status(200);
      res.json(categories);
    }else{
      res.status(404);
      res.json({
        Erro: "Nenhuma categoria encontrada."
      })
    }
  }

}

module.exports = new CategoryController();