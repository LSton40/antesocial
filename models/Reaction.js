const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Reaction = new Schema({
    reactionId: { 
        type: mongoose.ObjectId, 
        // default: mongoose.ObjectId
        //default value set to new ObjectId

    },
    reactionBody: { 
        type: String, 
        required: true, 
        maxLength: 280
    },
    username: { 
        type: String, 
        required: true},
    createdAt: {
        type: Date, 
        default: Date.now, 
        get: date => {return date.getMonth() + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds()}
        //use getter method to format timestamp
    }
},
{
  timestamps: true  
});

module.exports = Reaction;