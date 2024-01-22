
const productSchame =  new Schema({
    image:{
        type:String,
    },
    price:{
        type:String
    }
},
{ timestamps: true }
)

const userModel = model('users', productSchame);

module.exports = userModel;