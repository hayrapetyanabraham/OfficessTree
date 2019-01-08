const express = require('express');
const router = express.Router();

//Handle incoming GET request to /orders
router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Order were fetched'
    });
});

router.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'Order was created',
        order: order
    });
});

// router.get('/:orderId', (req, res, next) => {
//     res.status(200).json({
//         message: 'Order details',
//         orderId: req.params.orderId
//     });
// });


router.get('/:name', (req, res, next) => {
    const name = req.params.name;
    if (name == 'Hayrapet') {
        res.status(200).json({
            tariq: 31,
            id: 1254,
            name: name
        });
    } else {
        res.status(200).json({
            tariq: 27,
            id: 1255,
            name: 'Abraham'
        })
    }
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Order Deleted',
        orderId: req.params.orderId
    });
});

module.exports = router;