const express = require('express')


const createRouter = function (collection) {


    const router = express.Router()

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status:500, error:err});
        });
    });

    router.put('/subscribed', (req, res) => {
        //add a podcast from the podcast collection to the user collection
        const newData = req.body
        //set newPodcastState to newData
    })
    

    router.delete('/:id', (req, res) => {
        const id = req.params.id //id of database item;
        collection.deleteOne({_id: ObjectID(id)})
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error:err});
        })
        
    })

    return router
}