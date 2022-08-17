const { Schema, Types} = require('mongoose');
var moment = require('moment');

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
        get: (date) => date && moment(date).format("MMMM Do YYY, h:mm:ss a"),
    }
},
{
    timestamps: {createdAt: true, updatedAt: false},
    toJSON: {getters: true, virtuals: true},
    id: false
}
);

module.exports = Reaction;