const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Thought = require('./Thought');

const userSchema = new Schema({
    username: { 
        type: String, 
        unique: true, 
        required: true, 
        trim: true },
    email: { 
        type: String, 
        required: true, 
        unique: true, 
        validate: {validator: (email) => {
            const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            if (!emailRegex.test(email)) {
                return 'Email validation failed!'
            }
            // Promise.resolve(false), message: 'Email validation failed'}
    }}},
    thoughts: [{type: Schema.Types.ObjectId, ref: 'Thought'}],
    friends: [{type: Schema.Types.ObjectId, ref: 'this'}]
},
{
    toJSON: {
        virtuals: true,

    },
    id: false
},
{
    virtuals: {
        friendCount: {
            get() {
                return this.friends.length;
            }
        }
    }
}
);

const User = mongoose.model('User', userSchema);


const wombat = new User({
    username: "wombat4",
    email: "wombat4@kangaroo.org"
})

wombat.save()

module.exports = User;