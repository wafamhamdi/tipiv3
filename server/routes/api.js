const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
/*const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/database', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};*/

// Error handling
const sendError = (err, res) => {
   
    response.message = typeof err == 'object' ? err.message : err;
    res.json(response);
};

// Response handling
let response = {
 
    data: [],
   
};

MongoClient.connect('mongodb://localhost:27017', function (err, client) {
  if (err) throw err;

  var db = client.db('database');

// Get project
router.get('/project', (req, res) => {
        db.collection('project')
            .find()
            .toArray()
            .then((project) => {
                response.data = project;
                res.json(response);
                console.log(response.data);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// Get personal
router.get('/personal', (req, res) => {
    db.collection('personal')
        .find()
        .toArray()
        .then((personal) => {
            response.data = personal;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});
// Get task
router.get('/task', (req, res) => {
    db.collection('task')
        .find()
        .toArray()
        .then((task) => {
            response.data = task;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});
// Get Report
router.get('report', (req, res) => {
    db.collection('report')
        .find()
        .toArray()
        .then((report) => {
            response.data = report;
            res.json(response);
            console.log(response.data);
        })
        .catch((err) => {
            sendError(err, res);
        });
});

module.exports = router;