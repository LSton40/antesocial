const { Schema, Types} = require('mongoose');

//Defines Reaction Schema
const Reaction = new Schema({
    reactionId: { 
        type: Types.ObjectId, 
        default: Types.ObjectId
        //default value set to new ObjectId

    },
    reactionBody: { 
        type: String, 
        required: true, 
        maxLength: 280
    },
    username: { 
        type: String, 
        required: true
    },
    //Property showing formatted date and time that a Reaction is created
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: date => {return date.getMonth() + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds()}
        //use getter method to format timestamp
    }
},
// {
//   timestamps: true  
// }
);

module.exports = Reaction;