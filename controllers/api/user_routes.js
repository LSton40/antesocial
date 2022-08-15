const router = require('express').Router();
const { Reaction, Thought, User } = require('../../models');


router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(users);
        }
      });
});


router.get('/:userId', (req, res) => {
    User.findOne({
        _id: req.params.id
    }, (err, user) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(user);
        }
      });
})

router.post('/', (req, res) => {
    User.create(req.body, (err, new_user) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(new_user);
        }
      });
});


router.put('/:userId', (req, res) => {
    User.updateOne({
        _id: req.params.userId
    }, 
    req.body, 
    {
        new: true
    }, 
    (err, updated_user) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(updated_user);
        }
      });
});

router.delete('/:userId', (req, res) => {
    User.deleteOne({
            _id: req.params.userId

        //ALSO DELETE ASSOCIATED THOUGHTS
    }, 
    (err, user_gone) => {
        if (err) {
          res.status(500).send({ message: 'Internal Server Error' });
        } else {
          res.status(200).json(`${user_gone}, with all their dreams, is destroyed!`);
        }
      });
})


router.post('/:userId/friends/:friendId', (req, res) => {
    // User.
    // { _id: req.params.userId, friend_id: req.params.friendId}
})

router.delete('/:userId/friends/:friendId', (req, res) => {
    // User.
    // { _id: req.params.userId, friend_id: req.params.friendId}
})



module.exports = router;