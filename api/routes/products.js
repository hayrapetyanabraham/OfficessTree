const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling Get Request to /prouducts '
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handeling POST Request to /prouducts '
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