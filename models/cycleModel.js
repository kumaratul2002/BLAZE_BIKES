import mongoose from "mongoose";

const cycleSchema = new mongoose.Schema({

    name : {type : String , required : true} ,
    image : {type : String , required : true} , 
    brand : {type : String , required : true},
    bookedTimeSlots : [
        {
            from : {type : String , required : true},
            to : {type : String , required : true}
        }
    ] , 

    rentPerDay : {type : Number , required : true}


}, {timestamps : true}

)
const cycleModel = mongoose.model('cycles' , cycleSchema);
export default cycleModel;