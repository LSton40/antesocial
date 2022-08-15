const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Reaction = require('./Reaction');

const thoughtSchema = new Schema({
    thoughtText: { 
        type: String, 
        required: true, 
        minLength: 1,
        maxLength: 280
    },
    createdAt: { 
        type: Date, 
        default: Date.now, 
        get: date => {return date.getMonth() + ' ' + date.getDate() + ' ' + date.getFullYear() + ' at ' + date.getHours() + ':' + date.getMinutes() + '.' + date.getSeconds()}
        //use getter method to format timestamp
    },
    username: { 
        type: String, 
        required: true},
    reactions: [Reaction]
},
// {
//     timestamps: true
// },
{
    virtuals: {
        reactionCount: {
            get() {
                return this.reactions.length;
            }
        }
    }
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;