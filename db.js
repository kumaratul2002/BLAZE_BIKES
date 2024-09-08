const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://doodleforstudy:EaUh54TtCoPTpf45@cluster0.wuqzl.mongodb.net/' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose
//doodleforstudy
//DT0aos7QniLporYx