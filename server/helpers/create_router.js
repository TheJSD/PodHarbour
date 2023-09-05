const express = require('express');
const ObjectID = require('mongodb').ObjectID;

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

    router.get(("/:id"), (req, res) => {
        const _id = req.params.id;
        collection
            .findOne({ _id: ObjectID(_id) })
            .then((doc) => res.json(doc))
            .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        });
    });

    router.put ('/:id', (req, res) => {
        const _id = req.params.id;
        const updatedData = req.body;
        delete updatedData._id
        collection
        .updateOne({_id: ObjectID(_id)}, {$set: updatedData})
        .then((doc) => {
            res.json(doc)
        })
        .catch((err) => {
            res.status({status: 500, error: err})
        })
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
        
    });

    //do we need an update route? can we update podcasts?

    return router
};

module.exports = createRouter;