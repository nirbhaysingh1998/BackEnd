const { response } = require('express');
const express = require('express');

const router = express.Router()

module.exports = router;
//const Model = require('./Models/Models');
const Purchase = require('./Models/Purchase')


router.post('/post', async (req, res) => {
    const data = new Purchase({
        id: req.body.id,
        p_name: req.body.p_name,
        p_stock: req.body.p_stock,
        p_price: req.body.p_price,
        p_image: req.body.p_image,
        p_mrp: req.body.p_mrp,
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }

})
router.get('/get/:id', async (req, res) => {
    const data = await Purchase.find({ id: req.params.id })
    res.send(data)
})
//Get all Method
router.get('/getAll', async (req, res) => {

    res.send(data);
})

//Get by ID Method
router.get('/getOne/:id', (req, res) => {
    res.send(req.params)
})

//Update by ID Method
router.patch('/update/:id', async (req, res) => {

    await Purchase.updateOne({ id: req.params.id }, { $set: req.body })
    res.send('Update by ID API')
})

//Delete by ID Method
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})