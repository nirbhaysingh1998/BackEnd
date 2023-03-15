const mongoose = require('mongoose');


const dataSchema = new mongoose.Schema({
    id: {
        required: true,
        type: Number
    },
    p_name: {
        required: true,
        type: String
    },
    p_stock: {
        required: true,
        type: Number
    },
    p_price: {
        required: true,
        type: Number
    },
    p_image: {

        type: String,
    },
    p_mrp: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Items', dataSchema)