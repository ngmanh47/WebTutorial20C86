const categoryModel = require('../models/category.model');
module.exports = function (app) {
    app.use(async (req, res, next) => {
  
      //user
      const list_cat = await categoryModel.all();
      res.locals.list_cat = list_cat;
      next();
    })
  };