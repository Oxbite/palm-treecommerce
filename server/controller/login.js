//  ************************************ importing ************************************
startSession();
const express = require('express');
const { Schema, startSession } = require('mongoose');
const router = express.Router();
const dbcon = require('../controller/dbcon');
const model = require('../model/dbModel');
const { use } = require('../routes');
const fetchh = require('./fetch');

//  ************************************ importing ************************************


exports.checkUser = async (req,res) =>{
    // get from body -> check in databse -> if yes then store name and id in session ___> else throw error
    const username = req.body.userName;
    const password = req.body.password; 


    try {
        const user = await model.userModel.findOne({username});
        if(!user){
            return res.json({"Error Logging in": "User name in invalid"});
        }
        if(user.password !== password){
            return res.json({"Error Logging in": "Password in invalid"});
        }

        fetchh.fetchUsersName();
        
    } catch (error) {
        console.log(error);
        res.json({"Error Logging in": "Server error, try again"});
    }
    
} 