const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Reaction = new Schema({
    reactionId: { type: ObjectId, default: ObjectId
        //default value set to new ObjectId

    },
    reactionBody: { type: String, required: true, 
        //280 character max
    },
    username: { type: String, required: true},
    createdAt: {type: Date, default: Date.now, 
        //use getter method to format timestamp
    }
},
{
    
});