const router = require('express').Router();
const { Reaction, Thought, User } = require('../../models');



router.get('/', async (req, res) => {
    const thoughts = await Thought.find()

    res.send(thoughts);
});

router.get('/:thoughtId', async (req, res) => {
    const thought = await Thought.findOne({ 
      _id: req.params.thoughtId 
    })

    res.send(thought);
});

router.post('/', async (req, res) => {
    const new_thought = await Thought.create(req.body);

    const thoughtful_user = await User.findOneAndUpdate({ username: new_thought.username}, {$push: {thoughts: new_thought._id}});

    thoughtful_user.save();

    res.send(new_thought);
});


router.put('/:thoughtId', async (req, res) => {
  const changed_mind = await Thought.findByIdAndUpdate(req.params.thoughtId, req.body, {new: true});
    
  changed_mind.save();

  res.send(changed_mind);
});

router.delete('/:thoughtId', async (req, res) => {
    const old_thought = await Thought.findByIdAndDelete(req.params.thoughtId)
    const ignoramus = await User.findOneAndUpdate({username: old_thought.username}, {$pull: {thoughts: req.params.thoughtId}}, {new: true})

    ignoramus.save()
    res.send(`${ignoramus.username} has forgotten their thought, "${old_thought.thoughtText}"`);
});


router.post('/:thoughtId/reactions', async (req, res) => {

  const reaction = await Thought.findByIdAndUpdate(req.params.thoughtId, {$push: {reactions: req.body}}, {new: true});

  // reaction.reactions.push(req.body);

  reaction.save();

  res.send(reaction);

});

router.delete('/:thoughtId/reactions', async (req, res) => {
  const stoic_thought = await Thought.findByIdAndUpdate(req.params.thoughtId, {$pull: {reactions: req.body}}, {new: true});

  stoic_thought.save();

  res.send(`${stoic_thought.username}'s thought has lost a reaction`);

});

module.exports = router;