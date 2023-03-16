const { response } = require('express');
const { disconnect } = require('mongoose');
const dbModel = require('../model/dbModel');


exports.userSave = async (req,res) => {
    console.log(req.body)
    const users = new dbModel.userModel({
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password 
})

try {
    const user = await users.save()
    console.log("user saving success!")
}
catch(err) {
    console.log("eror adding: " + err);
    res.json({"error":"error has be occuring since the development, just ignore"});
}
};

exports.categorySave = async (req,res) =>{
    const categories = new dbModel.categoryModel({
        name: req.body.name,
        status: req.body.status
    })

    try {
        const category = await categories.save()
        console.log("category saving success!")
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
};

exports.productSave = async (req,res) =>{
    const products = new dbModel.productModel({
        name: req.body.name,
        price: req.body.price,
        oldPrice: req.body.oldPrice,
        discount: req.body.discount,
        caegory: req.body.categry,
        shopId: req.body.shopId
    })

    try {
        const product = await products.save()
        console.log("product saving success!")
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
};

exports.shopSave = async (req,res) =>{
    const shops = new dbModel.shopModel({
        name: req.body.name,
        address: req.body.name,
        owner: req.body.userId
    })

    try {
        const shop = await shops.save()
        console.log("Shop saving success!")
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
};