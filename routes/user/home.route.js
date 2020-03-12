const express = require('express');
const productModel = require('../../models/product.model');
const categoryModel = require('../../models/category.model');

const router = express.Router();

router.get('/', async (req, res) => {
    const rows = await productModel.newArrivals();

    res.render('index', {
        title: "Trang chủ",
        products: rows,
    });
})

module.exports = router;