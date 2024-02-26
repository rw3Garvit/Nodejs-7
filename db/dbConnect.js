const mongoose = require('mongoose')
const connectDB = () => {


    mongoose.connect('mongodb+srv://garvit:123@cluster0.ay4qlqk.mongodb.net/node7').then(() => {
        console.log('db Connected');
    }).catch((err) => {
        console.log(err);
    })

}

module.exports = connectDB