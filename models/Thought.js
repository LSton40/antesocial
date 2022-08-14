const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Thought = new Schema({
    thoughtText: { type: String, required: true},
    createdAt: { type: Date, },
    username: { type: String},
    reactions: {}
});