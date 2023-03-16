//  ************************************ importing ************************************
const express = require('express');
const { Schema, startSession } = require('mongoose');
const router = express.Router();
const dbcon = require('../controller/dbcon');
const model = require('../model/dbModel');
const { use } = require('../routes');
const fetchh = require('./fetch');
startSession();

//  ************************************ importing ************************************


exports.checkUser = async (req,res) =>{
    // get from body -> check in databse -> if yes then store name and id in session ___> else throw error
    var session;
    const username = req.body.userName;
    const password = req.body.password; 

    try {
        const user = await model.userModel.find({Fname: username}).exec();
        console.log(user);
        if(!user){
            return res.json({"Error Logging in": "User name in invalid"});
        }
        else if(user[0].password !== password){
            return res.json({"Error Logging in": "Password in invalid"});
        }
        session = req.session;
        session.userName = username;
        session.id = user[0]._id;

        res.json({"Message": "Success logging in" , "username": session.userName , "id":session.id});
        // console.log(session.userName);

    } catch (error) {
        console.log(error);
        res.json({"Error Logging in": "Server error, try again"});
    }

} 