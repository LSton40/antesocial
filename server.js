const express = require('express');
const db = require('./config/connection');
const routes = require('./controllers')
// const { MongoClient} = require('mongodb');

const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
});