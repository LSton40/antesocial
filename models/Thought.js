const { Schema, model, SchemaTypes } = require('mongoose');

const Reaction = require('./Reaction');

//Defines Thought Schema
const thoughtSchema = new Schema({
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
        get: date => {return date.getMonth() + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds()}
        //use getter method to format timestamp
    },
    username: { 
        type: String, 
        required: true
    },
    //Array referencing the Reaction Schema
    reactions: [Reaction]
},
//Virtual to get a count of the total number of Reactions a thought is given
{
    virtuals: {
        reactionCount: {
            get() {
                return this.reactions.length;
            }
        }
    }
});

//Sets a model based on the Thought Schema
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;