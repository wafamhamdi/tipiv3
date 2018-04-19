const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;


// Error handling
const sendError = (err, res) => {
   
    response.message = typeof err == 'object' ? err.message : err;
    res.json(response);
};

// Response handling
let response = {
 
    data: [],
   
};

//mongodb://wafamhamdi:wafamhamdi19@ds145283.mlab.com:45283/tipigit
var uri= 'mongodb://tipigit:tipigit@ds145283.mlab.com:45283/tipigit';


MongoClient.connect(uri, function (err, client) {
  if (err) throw err;
  var db = client.db('tipigit');
});
//var mongoose = require('mongoose');

/*var mongoDB = "mongodb://tipi:tipi@ds241489.mlab.com:41489/tipigit";

mongoose.connect(mongoDB, {
    useMongoClient: true
});

var db = mongoose.connection;*/

//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

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
