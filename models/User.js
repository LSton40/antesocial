const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, required: true, unique: true, validate: {validator: () => Promise.resolve(false), message: 'Email validation failed'}},
    thoughts: [Thought._id],
    frients: [User._id]
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