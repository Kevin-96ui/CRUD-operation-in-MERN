const express=require("express") // Importing Express
const router=express.Router(); // Router sending API 
const{getUser, postUser, updateuser, deleteuser} = require("../controller/internship.controller.js");// Call the controller function to get user data from database

router.get('/',getUser) // GET uSER
router.post('/',postUser) // Create USER
router.put('/:id',updateuser) // Update USER
router.delete('/:id',deleteuser) // Delete USER


module.exports=router;

