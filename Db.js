const mongoose = require('mongoose');

main().catch(err => console.log(err));

const ConnectToMongo = async () => {
    await mongoose.connect('mongodb+srv://Nirbhay1998:nirab222@cluster0.mudaov8.mongodb.net/Shop')
}

module.exports = ConnectToMongo;