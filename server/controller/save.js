const { response } = require('express');
const { disconnect } = require('mongoose');
const dbModel = require('../model/dbModel');


exports.userSave = (res,req) => {
    const users = new dbModel.userModel({
        Fname: req.body.Fname,
        Lname: req.body.Lname,
        email: req.body.email,
        role: req.body.role,
        password: req.body.password 
})

users.save((err) => {
    if(err){
        const error = "Eror saving " + req.body.name + "  to database";
        console.log("eror adding: " + err);
        res.json({"error":error});

    }
    else{
        console.log("products saving success!")
    }
})
}

exports.categorySave = (res,req) =>{
    const categories = new dbModel.categoryModel({
        name: req.body.name,
        status: req.body.status
    })

    categories.save((err) => {
        if(err){
            const error = " Error adding category to database!!";
            console.log("eror adding: " + err);
            res.json({"error":error});

        }
        else{
            console.log("products saving success!")
        }
    })
}

exports.productSave = (res,req) =>{
    const products = new dbModel.productModel({
        name: req.body.name,
        price: req.body.price,
        oldPrice: req.body.oldPrice,
        discount: req.body.discount,
        caegory: req.body.categry,
        shopId: req.body.shopId
    })

    products.save((err) => {
        if(err){
            const error = "Error saving products to database please try again";
            console.log("eror adding: " + err.message);
            res.json({"error":error});
        }
        else{
            console.log("products saving success!")
        }
    })
}

exports.shopSave = (res,req) =>{
    const shops = new dbModel.shopModel({
        name: req.body.name,
        address: req.body.name,
        owner: req.body.userId
    })

    shops.save((err)=>{
        if(err){
            const error = "Eror adding shop," + req.body.name + " ,to the database";
            console.log("error "+ err);
            res.json({eror:error});
        }
    })
}