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

    router.post('/', (req, res) => {
        //can we add a podcast in our app?
        //do we use this post to add to our subscribed list?
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

    //do we need an update route? can we update podcasts?

    return router
}

module.exports = createRouter