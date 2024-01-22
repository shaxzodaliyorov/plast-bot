const { model, Schema } = require('mongoose')

const userSchame =  new Schema({
    fullName:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    basket:{
        type:Schema.Types.ObjectId,
        ref:"products"
    },
},
{ timestamps: true }
)

const userModel = model('users', userSchame);

module.exports = userModel;