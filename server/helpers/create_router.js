const express = require('express')

const createRouter = function (collection) {


    const router = express.Router()

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => docs.json())
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status:500, error:err});
        })
    })

    return router
}