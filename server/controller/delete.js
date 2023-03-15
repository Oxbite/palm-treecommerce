const { response } = require('express');
const { disconnect } = require('mongoose');
const dbModel = require('../model/dbModel');
var ObjectId = require('mongodb').ObjectID;

exports.deleteUser = async (req,res) =>{

    const id = req.query.id;
    console.log(id)

    try {
        const user = await dbModel.userModel.findByIdAndDelete(id);
        res.json({"Success":"User has been deleted"});
        console.log("user deletion success!");
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
}

exports.deleteShop = async (req,res) =>{

    const id = req.query.id;
    console.log(id)

    try {
        const user = await dbModel.shopModel.findByIdAndDelete(id);
        res.json({"Success":"Shop has been deleted"});
        console.log("Shop deletion success!");
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
}

exports.deleteCategory = async (req,res) =>{

    const id = req.query.id;
    console.log(id)

    try {
        const user = await dbModel.categoryModel.findByIdAndDelete(id);
        res.json({"Success":"Category has been deleted"});
        console.log("Category deletion success!");
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
}

exports.deleteProducts= async (req,res) =>{

    const id = req.query.id;
    console.log(id)

    try {
        const user = await dbModel.productModel.findByIdAndDelete(id);
        res.json({"Success":"Product has been deleted"});
        console.log("Product deletion success!");
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }
}