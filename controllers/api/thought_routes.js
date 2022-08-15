const router = require('express').Router();
const { Reaction, Thought, User } = require('../../models');



router.get('/', (req, res) => {
    Thought.find({}, 
      (err, thoughts) => {
        if (thoughts) {
          res.status(200).json(thoughts);
        } else {
          console.log('Uh Oh, I have no thoughts!');
          res.status(500).json({ message: 'How thoughtless of you!' });
        }
      })
});

router.get('/:thoughtId', (req, res) => {
    Thought.findOne({ 
      _id: req.params.thoughtId 
    }, 
    (err, thought) => {
        if (thought) {
          res.status(200).json(thought);
        } else {
          console.log('Uh Oh, brainfart');
          res.status(500).json({ message: 'How thoughtless of you!' });
        }
      })
});

router.post('/', (req, res) => {
    Thought.create({
        thoughtText: req.body.thoughtText,
        username: req.body.username,
        userId: req.body.userId
    })
    .then((thoughts) => {
        res.json(thoughts)
    })
});


router.put('/:thoughtId', (req, res) => {
    Thought.updateOne({
            _id: req.params.thoughtId
        },
        {
            thoughtText: req.body.thoughtText
        },
        {
          new: true
        },
        (err, thought) => {
            if (thought) {
              res.status(200).json(thought);
            } else {
              console.log("Uh Oh, I'm stuck in a rut");
              res.status(500).json({ message: "I don't readily change my mind!" });
            }
          })
});

router.delete('/:thoughtId', (req, res) => {
    Thought.fineOneAndDelete({
        _id: req.params.thoughtId
    }, (err, result) => {
        if (lost_thought) {
          res.status(200).json(lost_thought);
          console.log(`Forgot: ${lost_thought}`);
        } else {
          console.log("Uh Oh, I can't get it out of my brain!!!");
          res.status(500).json({ message: 'No!!! Get out of my head!' });
        }
      })
});


// router.post('/thoughts/:thoughtId/reactions', (req, res) => {
//     Reaction.create({
//         where: {
//             _id: req.params.thoughtId
//         }
//     })
//     .then((thought) => {
//         res.json(thought)
//     })
// });

// router.delete('/thoughts/:thoughtId/reactions', (req, res) => {
//     Reaction.deleteOne({
//             _id: req.params.thoughtId
//     })
//     .then((thought) => {
//         res.json('Reaction deleted!')
//     })
// });

module.exports = router;