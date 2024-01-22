
const productSchame =  new Schema({
    image:{
        type:String,
    },
    price:{
        type:String
    },
    buyedCount:{
        type:number
    }
},
{ timestamps: true }
)

const userModel = model('users', productSchame);

module.exports = userModel;