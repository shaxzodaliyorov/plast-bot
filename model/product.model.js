import {model, Schema} from "mongoose"

const productSchame =  new Schema({
    image:{
        type:String,
    },
    price:{
        type:String
    },
    buyedCount:{
        type:number
    },
    userID:{type:Number
    }
},
{ timestamps: true }
)

const productModel = model('product', productSchame);


export default productModel