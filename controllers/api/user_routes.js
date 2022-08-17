const router = require('express').Router();
const { Reaction, Thought, User } = require('../../models');

//GET Request to find and view all Users
router.get('/', async (req, res) => {
    const users = await User.find().populate('friends')
    res.send(users)
});

//GET Request to find and view a User by Id, with associated Thoughts and Friends
router.get('/:userId', async (req, res) => {
    const user = await User.findOne({
        _id: req.params.userId
    })
    .populate('thoughts')
    .populate('friends')
    res.send(user);
});

//POST Request to create a new User
router.post('/', async (req, res) => {
    const new_user = await User.create(req.body);
    res.send(new_user);
});

//PUT Request to find and update a User by Id 
router.put('/:userId', async (req, res) => {
    const updated_user = await User.findByIdAndUpdate(
        req.params.userId, req.body, { new: true }
    );
    updated_user.save();
    res.send(updated_user);
});

//DELETE Request to find and delete a User by Id, as well as all associated Thoughts
router.delete('/:userId', async (req, res) => {
    const former_user = await User.findByIdAndDelete(req.params.userId);
    const ephemeral_thoughts = await Thought.deleteMany({username: former_user.username})
    res.send(`${former_user.username} and all thoughts deleted!`)
});

//POST Request to find and update a User by Id by adding a Friend
router.post('/:userId/friends/:friendId', async (req, res) => {
    let new_friend = await User.findByIdAndUpdate(
        req.params.userId, {$push: {friends: req.params.friendId}}, {new: true}
    );
    new_friend.save();
    res.send(new_friend);
});

//DELETE Request to find and update a User by Id by deleting a Friend
router.delete('/:userId/friends/:friendId', async (req, res) => {
    let friendless = await User.findByIdAndUpdate(
        req.params.userId, {$pull: {friends: req.params.friendId}}, {new: true}
    );
    friendless.save();
    res.send(friendless);
});

module.exports = router;