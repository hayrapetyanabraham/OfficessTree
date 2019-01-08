const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

const Product = require('../models/product');

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling Get Request to /prouducts '
    });
});

router.post('/', (req, res, next) => {

    const product = {
        name: req.body.name,
        price: req.body.price
    };


    // const product = new Product({
    //     _id: new mongoose.Types.ObjectId,
    //     name: req.body.name,
    //     price: req.body.price

    // });
    // product.save().then(result => {
    //     console.log(result);
    // }).catch(err => console.log(err));

    res.status(201).json({
        message: 'Handeling POST Request to /prouducts ',
        createdProduct: product
    });
});

router.get('/:prouductId', (req, res, next) => {
    const id = req.params.prouductId;
    if (id == 'special') {
        res.status(200).json({
            message: 'You descovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }

});


router.patch('/:prouductId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });

});

router.delete('/:prouductId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });

});



module.exports = router;