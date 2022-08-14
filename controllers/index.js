const router = require('express').Router();

const routes = require('./api');

router.use('/api', routes);

router.use((req, res) => {
    res.send("<h1>Where do you think you're going?</h1>")
});

module.exports = router;