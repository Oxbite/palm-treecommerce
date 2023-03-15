const { default: mongoose, Schema } = require("mongoose");

exports.userModel = new mongoose.Schema({
    Fname: {
        type:  String,
        required: true
    },
    Lname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    role:{
        type: String,
        required: true
    },
    passwod:{
        type: String,
        required: true
    }
})

exports.categoryModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true,
        default: "active"
    },
})

exports.shopModel = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true,
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
})

exports.productModel=new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    oldPrice:{
        type: String,
        required: false
    },
    discount:{
        type: String,
        required: false
    },
    category:{
        type: String,
        required: true
    },
    shopId:{
        type: Schema.Types.ObjectId,
        ref: 'Shop',
        required: true
    },
})