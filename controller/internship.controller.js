const lavaagni = require('../model/internship.model.js'); // Imported form internship.model.js file

const getUser = async(req,res)=>{ // Get user function
    try {
        const user = await lavaagni.find({}); // Get user
        res.status(200).json(user) // 200 for success
    } catch (error) {
        res.status(500).json({message:error.message}); // 500 for error
    }
}

const  postUser = async (req,res)=> { // Post User Function
    try {
        const user = await  lavaagni.create(req.body); // Create a new user from the request body
        res.status(200).json(user); // 200
    } catch (error) {
        res.status(500).json({message:error.message}); // 500 for error
    }
}

const updateuser = async (req,res) =>{
    try {
        const {id}= req.params; // Id of the user which we want to update | id ahh parameter la send pandrom
        const user = await  lavaagni.findByIdAndUpdate(id,req.body); // Create a new user from the request body // (id,req.body) 
        const users = await lavaagni.findById(id); // Get user
        res.status(200).json(users) // 200 for success
    } catch (error) {
        res.status(500).json({message:error.message}); // 500 for error
    }
}

const deleteuser = async (req,res) =>{
    try {
        const {id}= req.params; // Id of the user which we want to update | id ahh parameter la send pandrom
        const user = await  lavaagni.findByIdAndDelete(id); // Create a new user from the request body
        //const users = await lavaagni.findById(id); // Get user
        res.status(200).json("User Deleted") // 200 for success
    } catch (error) {
        res.status(500).json({message:error.message}); // 500 for error
    }
}

module.exports = { //For exporting functions
    getUser,
    postUser,
    updateuser,
    deleteuser
}
