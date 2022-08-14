const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, required: true, unique: true, validate: {validator: () => Promise.resolve(false), message: 'Email validation failed'}},
    thoughts: {},
    frients: {}
});