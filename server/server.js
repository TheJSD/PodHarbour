const express = require('express');
const cors = require('cors');

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const app = express();
app.use(cors());
app.use(express.json());

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('podharbour');
    const podcastsCollection = db.collection('podcasts');
    const usersCollection = db.collection('users');
    const podcastsRouter = createRouter(podcastsCollection);
    const usersRouter = createRouter(usersCollection);
    app.use('/api/podcasts', podcastsRouter);
    app.use('/api/users', usersRouter);
    })
.catch(console.err);

app.listen(9000, function (){
    console.log(`Listening on port ${this.address().port}`);
});