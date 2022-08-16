const { Schema, model, SchemaTypes} = require('mongoose');

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
    }}},
    thoughts: [{
        type: SchemaTypes.ObjectId, 
        ref: 'Thought'
    }],
    friends: [this]
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

const User = model('User', userSchema);


// User.deleteMany({}).then(() => console.log('Users deleted!'))

module.exports = User;