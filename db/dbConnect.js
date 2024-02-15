const mongoose = require('mongoose')
const connectDB=()=>{


    mongoose.connect('mongodb://127.0.0.1:27017/node7').then(()=>{
        console.log('db Connected');
    }).catch((err)=>{
        console.log(err);
    })

}

module.exports=connectDB