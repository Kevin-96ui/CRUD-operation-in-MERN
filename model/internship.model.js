
const { default: mongoose } = require("mongoose");
const mangoose=require("mongoose"); // MONGO DB connection
const internSchema = mongoose.Schema({ // Mongo Table creation
    name: { 
        type: String, 
        required: true,
    },
    email: { 
        type: String, 
        required: true,
    },    
    stack: { 
        type: String, 
        required: true,
    },    
    contact: { 
        type: Number, 
        required: false,
    }    
},
{
    timestamps : true,   // It provides createdAt and updatedAt as
}
);

const lavaagni = mongoose.model('intern',internSchema) // Table name & stored in a object "lavaagni"
module.exports = lavaagni; // Exporting the table