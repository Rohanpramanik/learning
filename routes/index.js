var express = require('express');
var router = express.Router();
const userModel = require("./data");

/* GET home page. */
//cookies create
router.get('/', function(req, res, next) {
  res.cookie("age", 25);
  res.render('index');
});

//cookies read
router.get('/read', function(req, res, next) {
  console.log(req.cookies);
  res.send("check");
});

//cookies delete
router.get('/delete', function(req, res, next) {
  res.clearCookie("age");
  res.send("clear");
});

// router.get('/', function(req, res, next) {
//   req.session.kuchvnaam = true;
//   res.render('index');
// });

// router.get('/sessioncheck', function(req, res, next) {
//   if(req.session.kuchvnaam == true){
//     res.send('you are banned');
//   }
// });

// router.get('/deletesession', function(req, res, next) {
//   req.session.destroy(function(err){
//     if (err) throw err;
//     res.send("ban removed")
//   })
// });

//for createing the user or putting into the user collection
// router.get('/create', async function(req, res) {
//   const createdUser = await userModel.create({
//     username : "RohanPra",
//     name : "Rohan",
//     age : 25,
//   });
//   res.send(createdUser);
// });

//to get all the user inside collection
// router.get('/allusers', async function(req, res) {
//   const getAllUsers = await userModel.find();
//   res.send(getAllUsers);
// });

// router.get('/oneuser', async function(req, res) {
//   const singleUser = await userModel.findOne({username: "RohanPra"});
//   res.send(singleUser);
// });

// router.get('/delete', async function(req, res) {
//   const deleteUser = await userModel.findOneAndDelete({username: "RohanPra"});
//   res.send(deleteUser);
// });
module.exports = router;
