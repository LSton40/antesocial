const express = require('express');

// const connect = require('./config/connection');

const routes = require('./controllers/api/user_routes')
const { MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);


const app = express();
const PORT = process.env.PORT || 3009;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(routes);

//NEED DB NAME!!!
const dbName = '';

async function connectDb() {
    await client.connect();

    const db = client.db(dbName);

    //NEED COLLECTION NAME!!!!
    const fc = db.collection('');

    const VARIABLE = await fc.find().toArray();

    return
}

connectDb();

db.synx({force: false})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`App listening on port ${PORT}!`);
        });
    });