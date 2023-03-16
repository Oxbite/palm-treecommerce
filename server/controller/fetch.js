//  ************************************ importing ************************************
const express = require('express');
const { Schema } = require('mongoose');
const router = express.Router();
const dbcon = require('../controller/dbcon');
const model = require('../model/dbModel');
const { use } = require('../routes');
//  ************************************ importing ************************************



//*************************************************** USERS  ***************************************************/
exports.fetchAllUsers = async(req,res)=>{
    const users= await model.userModel.find({}).populate();
        res.json({"all user data": users});
}


//fetches all user data except password
exports.fetchUsers = async(req,res) => {
    const users = await model.userModel.find({}, 'Fname Lname email role').populate();
    res.json({"all user name": users});
} 

//only gets name and id of user-----------> ME FUNCTION
exports.fetchUsersName = async(req,res) => {
    const usersObj = await model.userModel.find({}, '_id Fname Lname').populate();
    res.session.user = {userName: usersObj[0].Fname +" "+ usersObj[0].Lname,userId: usersObj[0]._id };
    console.log(usersName);
    res.json({"userId": userId, "user name": usersName});
}

//*************************************************** USERS  ***************************************************/


exports.fetchShops = async(res,req)=>{
    const shops = await model.shopModel.find({}).populate();
    res.json({"all shops data": shops});
}

exports.fetchCategory = async(res,req)=>{
    const categories = await model.categoryModel.find({}).populate();
    res.json({"all category data": categories});
}

exports.fetchPoducts = async(res,req)=>{
    const products = await model.productModel.find({}).populate();
    res.json({"all product data": products});
}