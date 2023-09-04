const express= require('express')
const cors = require('cors')

const MongoClient = require('mongodb').MongoClient
const createRouter = require('')

const app = express()
app.use(cors())
app.use(express.json())

MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
.then((client) => {
    const db = client.db('podharbour');
    const podcastsCollection = db.collection('podcasts')
    const usersCollection = db.collection('users')

    //Create router for podcasts and users
    // app.use('/api/podcasts')
})
.catch(console.err)

app.listen(9000, function (){
    console.log(`Listening on port ${this.address().port}`);
});