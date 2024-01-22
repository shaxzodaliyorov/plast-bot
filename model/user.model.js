
import {model, Schema} from "mongoose"

const userSchame =  new Schema({
    fullName:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true,
        unique: true,
    },
    basket:{
        type:Schema.Types.ObjectId,
        ref:"products"
    },
},
{ timestamps: true }
)

const userModel = model('users', userSchame);

export default userModel