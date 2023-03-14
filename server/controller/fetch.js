//  ************************************ importing ************************************
const express = require('express');
const { Schema } = require('mongoose');
const router = express.Router();
const dbcon = require('../controller/dbcon');
const model = require('../model/dbModel')
//  ************************************ importing ************************************

exports.fetchUsers = async(res,req)=>{
    const users= await model.userModel.find({}).populate();
    res.json({"all user data": users});
}

// fetch user ko data but no password
//send gar name only user ko
//tesko profile show garne
// me function ulululu name and id to check login


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