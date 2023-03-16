//  ************************************ importing ************************************
const express = require('express');
const { Schema, startSession } = require('mongoose');
const router = express.Router();
const dbcon = require('../controller/dbcon');
const model = require('../model/dbModel');
const { use } = require('../routes');
const fetchh = require('./fetch');
const bcrypt = require ('bcrypt');
startSession();

//  ************************************ importing ************************************


exports.checkUser = async (req,res) =>{
    var session;
    const email = req.body.email;
    const password = req.body.password; 

    try {
        const user = await model.userModel.find({email}).exec();
        console.log(user);
        if(!user){
            return res.json({"error": "Email is invalid"});
        }
        else if(await bcrypt.compare(password, user[0].password)){
            return res.json({"error": "Password is invalid"});
        }
        session = req.session;
        session.userName = username;
        session._id = user[0]._id;

        res.json({"status": "Success logging in" , "username": session.userName , "id":session.id});
        // console.log(session.userName);

    } catch (error) {
        console.log(error);
        res.json({"error": "Server error, try again"});
    }

} 