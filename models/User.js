const { Schema, model, SchemaTypes} = require('mongoose');

//Defines User Schema
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
        //A validator to test whether the String matches an email pattern
        validate: {validator: (email) => {
            const emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
            if (!emailRegex.test(email)) {
                return 'Email validation failed!'
            }
    }}},
    //Array referencing Thought model
    thoughts: [{
        type: SchemaTypes.ObjectId, 
        ref: 'Thought'
    }],
    //A self-referencing array, categorizing other Users as friends
    friends: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
},
{
    toJSON: {
        virtuals: true,
    },
    id: false
}
);

//Virtual to get a count of the total number of friends
userSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

//Sets a model based on the User Schema
const User = model('User', userSchema);

module.exports = User;