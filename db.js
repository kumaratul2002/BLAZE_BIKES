import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
function connectDB(){

    mongoose.connect(process.env.MONGODB_URI)

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

export default mongoose;