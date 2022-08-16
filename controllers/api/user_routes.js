const router = require('express').Router();
const { Reaction, Thought, User } = require('../../models');


router.get('/', async (req, res) => {
    const users = await User.find();

    res.send(users)
});


router.get('/:userId', async (req, res) => {
    const user = await User.findOne({
        _id: req.params.userId
    })
      .populate('thoughts')
      .populate('friends')

    res.send(user);

})

router.post('/', async (req, res) => {
    const new_user = await User.create(req.body);

    res.send(new_user);
});


router.put('/:userId', async (req, res) => {
    const updated_user = await User.updateOne({
        _id: req.params.userId
    }, 
    req.body, 
    {
        new: true
    });

    updated_user.save();

    res.send(updated_user);
});

router.delete('/:userId', async (req, res) => {
    const former_user = await User.findByIdAndDelete(req.params.userId);

    const ephemeral_thoughts = await Thought.deleteMany({username: former_user.username})
        //ALSO DELETE ASSOCIATED THOUGHTS

    res.send(`${former_user.username} and all thoughts deleted!`)

})


router.post('/:userId/friends/:friendId', async (req, res) => {
  const new_friend = await User.findByIdAndUpdate(req.params.userId, {$push: {friends: req.params.friendId}}, {new: true});

  new_friend.save();

  res.send(new_friend);
})

router.delete('/:userId/friends/:friendId', async (req, res) => {
  const friendless = await User.findByIdAndUpdate(req.params.userId, {$pull: {friends: req.params.friendId}}, {new: true});

  friendless.save();

  res.send(friendless);
})



module.exports = router;