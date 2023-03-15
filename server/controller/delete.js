const { response } = require('express');
const { disconnect } = require('mongoose');
const dbModel = require('../model/dbModel');
var ObjectId = require('mongodb').ObjectID;

exports.deleteuser = async (req,res) =>{

    const userId = req.query.id;
    console.log(userId)

    try {
        const user = await dbModel.userModel.findByIdAndDelete(userId);

        console.log("user deletion success!")
    }
    catch(err) {
        console.log("eror adding: " + err);
        res.json({"error":"error has be occuring since the development, just ignore"});
    }

}