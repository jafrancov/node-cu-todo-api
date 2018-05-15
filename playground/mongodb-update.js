// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'TodoApp';

MongoClient.connect(url, (err, client) => {

    assert.equal(null, err);
    console.log('Connected to MongoDB server');

    const db = client.db(dbName);

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID("5af9bedaf449a8183d669209")
    // }, {
    //     $set: {
    //         text: "Taco Cat palyndrome",
    //         completed: false
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5afb3bd2a709a05837cbb69a")
    }, {
        $set: {
            name: "Alejandro Franco",
            location: "Guanajuato"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();

});