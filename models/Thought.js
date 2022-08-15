const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, 
        //between 1-280 characters
    },
    createdAt: { type: Date, default: Date.now, 
        //use getter method to format timestamp
    },
    username: { type: String, required: true},
    reactions: [Reaction]
},
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
