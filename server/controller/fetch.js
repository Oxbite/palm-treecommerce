//  ************************************ importing ************************************
const express = require("express");
const session = require("express-session");
const { Schema, startSession } = require("mongoose");
const dbcon = require("../controller/dbcon");
const model = require("../model/dbModel");
//  ************************************ importing ************************************

//*************************************************** USERS  ***************************************************/
// exports.fetchAllUsers = async(req,res)=>{
//     const users= await model.userModel.find({}).populate();
//         res.json({"all user data": users});
// }

//fetches all user data except password
exports.fetchUsers = async (req, res) => {
  const users = await model.userModel
    .find({}, "Fname Lname email role status")
    .populate();
  res.json({ "all user name": users });
};

//only gets name and id of user-----------> ME FUNCTION
exports.fetchUsersName = async (req, res) => {
  if (!(await dbcon.connect())) {
    console.log("terobau");
    res.json({ error: "Server Error" });
    return;
  }
  const usersObj = await model.userModel
    .find({}, "_id Fname Lname status")
    .populate();
  if (!usersObj[0]) {
    res.json({ error: "NotLoggedIn" });
    return;
  }

  const user = usersObj[0].Fname + " " + usersObj[0].Lname;
  const userId = usersObj[0]._id;
  const userStatus = usersObj[0].status;
  res.json({ id: userId, userName: user, userStatus: userStatus });
};

//*************************************************** USERS END ***************************************************/

exports.fetchShops = async (res, req) => {
  const shops = await model.shopModel.find({}).populate();
  res.json({ "all shops data": shops });
};

exports.fetchCategory = async (res, req) => {
  const categories = await model.categoryModel.find({}).populate();
  res.json({ "all category data": categories });
};

exports.fetchPoducts = async (res, req) => {
  const products = await model.productModel.find({}).populate();
  res.json({ "all product data": products });
};
