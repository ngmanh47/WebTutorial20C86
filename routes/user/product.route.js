const express = require('express');
const productModel = require('../../models/product.model');
const router = express.Router();

router.get('/:id', async (req, res) => {
    const idPro = req.params.id;
    const rows = await productModel.single(idPro);

    res.render('single-product', {
        title: "Sản phẩm ",
        products: rows[0],
    });
})

module.exports = router;