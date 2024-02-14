const mongoose = require('mongoose')

const dbConnect=()=>{

    mongoose.connect('mongodb://localhost:27017/node7').then(()=>{
        console.log('db connected');
    }).catch((err)=>{
        console.log(err,'err');
    })

}

module.exports={dbConnect}