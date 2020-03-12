const express = require('express');
const productModel = require('../../models/product.model');
const categoryModel = require('../../models/category.model');
const config = require('../../config/default.json');

const router = express.Router();

router.get('/:id', async (req, res) => {
    const idCat = req.params.id;
    const rows = await productModel.allByCat(idCat);
    const get_cat = await categoryModel.single(idCat);
    //console.log(get_cat[0]);

    res.render('single-cat', {
        title: get_cat[0].name,
        get_cat: get_cat[0],
        products: rows,
    });
})

module.exports = router;