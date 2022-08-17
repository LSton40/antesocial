const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
var moment = require('moment');

//Defines Thought Schema
const thoughtSchema = new Schema(
{
    thoughtText: { 
        type: String, 
        required: true, 
        minLength: 1,
        maxLength: 280
    },
    //Property showing formatted date and time that a Thought is created
    createdAt: {
        type: Date, 
        default: Date.now,
        get: (date) => date && moment(date).format("MMMM Do YYY, h:mm:ss a"),
    },
    username: { 
        type: String, 
        required: true
    },
    //Array referencing the Reaction Schema
    reactions: [Reaction]
},
{
    timestamps: {createdAt: true, updatedAt: false},
    toJSON: {getters: true, virtuals: true},
    id: false
}
);

//Virtual to get a count of the total number of Reactions a thought is given
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
})

//Sets a model based on the Thought Schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;